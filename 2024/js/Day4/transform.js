const fs = require("fs");

const processFile = (fileName) => {
  return fs
    .readFileSync(fileName, "utf8")
    .split("\n")
    .map((s) => s.trim().split(""));
};

exports.processFile = processFile;
