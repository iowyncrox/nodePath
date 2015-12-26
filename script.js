var path = require("path");

var file = __filename;

console.log(typeof file);
console.log(file);
console.log("");

// parse
console.log(path.parse(file));
console.log("");

// format
filePathNameObject = path.parse(file);
console.log(path.format(filePathNameObject));
console.log("");

// basename
console.log(path.basename(file));
console.log(path.basename(file, ".js"));
console.log("");

// dirname
console.log(path.dirname(file));
console.log("");

// extname
console.log(path.extname(file));
console.log("");

// Path
console.log(process.env.PATH);
console.log("");

// sep
console.log(file.split(path.sep));
console.log("");