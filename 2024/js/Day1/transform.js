const fs = require("fs");

const processFile = (fileName) => {
  const first = [];
  const second = [];

  fs.readFileSync(fileName, "utf8")
    .split("\n")
    .forEach((s) => {
      const splittedValues = s.trim().split("   ");
      first.push(Number(splittedValues[0]));
      second.push(Number(splittedValues[1]));
    });

  return {
    first,
    second,
  };
};

exports.processFile = processFile;
