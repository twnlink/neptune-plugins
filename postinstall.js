const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const pluginsDir = path.join(__dirname, "plugins");

fs.readdir(pluginsDir, (err, files) => {
	if (err) {
		console.error("Error reading plugins directory:", err);
		process.exit(1);
	}
	for (const file of files) {
		const pluginPath = path.join(pluginsDir, file);
		if (fs.statSync(pluginPath).isDirectory()) {
			if (!fs.existsSync(path.join(pluginPath, "package.json"))) continue;
			console.log(`Installing modules for plugin ${file}...`);
			process.stdout.write(execSync(`cd ${pluginPath} && pnpm i`));
		}
	}
});
