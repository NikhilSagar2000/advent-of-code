const transform = require("./transform");
const isValid = require("./isValid");

const fileName = "./input.txt";

function main() {
  const reports = transform.processFile(fileName);
  return reports.filter(isValid).length;
}

console.log(main());
