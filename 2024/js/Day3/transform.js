const fs = require("fs");

const processFile = (fileName) => {
  return fs.readFileSync(fileName, "utf8");
};

exports.processFile = processFile;
