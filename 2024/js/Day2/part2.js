const transform = require("./transform");
const isValid = require("./isValid");

const fileName = "./input.txt";

const isValidWithTolerance = (record) => {
  if (isValid(record)) return true;

  return record.some((_, index) => isValid(record.toSpliced(index, 1)));
};

function main() {
  const reports = transform.processFile(fileName);

  return reports.filter(isValidWithTolerance).length;
}

console.log(main());
