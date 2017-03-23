var manifest = require("../src/manifest.json"),
    fileSystem = require("fs"),
    path = require("path"),
    env = require("./env");

const inputDirname = path.join(__dirname, '../src/popup/img/');
const outputDirname = path.join(__dirname, '../build/');

// generates the manifest file using the package.json informations
manifest.description = process.env.npm_package_description;
manifest.version = process.env.npm_package_version;

fileSystem.writeFileSync(
  path.join(__dirname, "../build/manifest.json"),
  JSON.stringify(manifest)
);

fileSystem.readdir(inputDirname, (err, filenames) => {
  if (err) return console.error(err);
  if (!fileSystem.existsSync(outputDirname + 'img/')) {
    fileSystem.mkdirSync(outputDirname + 'img/');
  }
  filenames.forEach(filename => {
    fileSystem.createReadStream(inputDirname + filename).pipe(fileSystem.createWriteStream(outputDirname + 'img/' + filename));
  });

});