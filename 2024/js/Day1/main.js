const transform = require("./transform");
const sort = require("../helpers/sort");

const fileName = "input.txt";

function main() {
  const { first, second } = transform.processFile(fileName);
  const sortedFirst = sort.mergeSort(first);
  const sortedSecond = sort.mergeSort(second);

  const length = Math.max(sortedFirst.length, sortedSecond.length);

  let result = 0;

  for (let i = 0; i < length; i++) {
    const firstValue = sortedFirst[i] || 0;
    const secondValue = sortedSecond[i] || 0;
    result += Math.abs(firstValue - secondValue);
  }

  return result;
}

console.log(main());
