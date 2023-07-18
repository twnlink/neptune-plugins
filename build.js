const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const repl = require("repl");

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
      bundle: true,
      minify: true,
      format: "esm",
      // Make every node builtin external while still bundling for browsers.
      external: [
        ...repl._builtinLibs,
        ...repl._builtinLibs.map((m) => "node:" + m),
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
