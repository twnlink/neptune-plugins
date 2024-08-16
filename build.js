const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const nativeExternals = ["@neptune", "@plugin", "electron"]

const plugins = fs.readdirSync("./plugins");
for (const plugin of plugins) {
  let pluginPath = path.join("./plugins/", plugin);

  const pluginManifest = JSON.parse(
    fs.readFileSync(path.join(pluginPath, "plugin.json"))
  );

  const outfile = path.join(pluginPath, "dist/index.js");

  esbuild
    .build({
      entryPoints: [
        "./" + path.join(pluginPath, pluginManifest.main ?? "index.js"),
      ],
      plugins: [
        {
          name: "neptuneNativeImports",
          setup(build) {
            build.onLoad(
              { filter: /.*[\/\\].+\.native\.[a-z]+/g },
              async (args) => {
                const result = await esbuild.build({
                  entryPoints: [args.path],
                  bundle: true,
                  minify: true,
                  platform: "node",
                  format: "iife",
                  globalName: "neptuneExports",
                  write: false,
                  external: nativeExternals
                });

                const outputCode = result.outputFiles[0].text;

                // HATE! WHY WHY WHY WHY WHY (globalName breaks metafile. crying emoji)
                const { metafile } = await esbuild.build({
                  entryPoints: [args.path],
                  platform: "node",
                  write: false,
                  metafile: true,
                  bundle: true, // I find it annoying that I have to enable bundling.
                  format: "esm", // This avoids exports not being properly defined, thus you do not need to change log levels.
                  external: nativeExternals,
                });

                const builtExports = Object.values(metafile.outputs)[0].exports;

                return {
                  contents: `import {addUnloadable} from "@plugin";const contextId=NeptuneNative.createEvalScope(${JSON.stringify(
                    outputCode
                  )});${builtExports
                    .map(
                      (e) =>
                        `export ${
                          e == "default" ? "default " : `const ${e} =`
                        } NeptuneNative.getNativeValue(contextId,${JSON.stringify(
                          e
                        )})`
                    )
                    .join(
                      ";"
                    )};addUnloadable(() => NeptuneNative.deleteEvalScope(contextId))`,
                };
              }
            );
          },
        },
      ],
      bundle: true,
      minify: true,
      format: "esm",
      external: [
        "@neptune",
        "@plugin",
      ],
      platform: "browser",
      outfile,
    })
    .then(() => {
      fs.createReadStream(outfile)
        // It being md5 does not matter, this is for caching and not security
        .pipe(crypto.createHash("md5").setEncoding("hex"))
        .on("finish", function () {
          fs.writeFileSync(
            path.join(pluginPath, "dist/manifest.json"),
            JSON.stringify({
              name: pluginManifest.name,
              description: pluginManifest.description,
              author: pluginManifest.author,
              hash: this.read(),
            })
          );

          console.log("Built " + pluginManifest.name + "!");
        });
    });
}
