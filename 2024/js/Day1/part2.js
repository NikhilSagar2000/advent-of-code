const transform = require("./transform");
const sort = require("../helpers/sort");

const fileName = "input.txt";

const calculateOccurences = (arr, value, initial = 0) => {
  let index = -1;

  for (let i = initial; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      break;
    }
  }

  let hasValue = index >= 0;
  let occurences = 0;

  while (hasValue) {
    occurences++;
    index++;
    hasValue = arr[index] === value;
  }

  return { occurences, index };
};

function main() {
  const { first, second } = transform.processFile(fileName);
  const sortedFirst = sort.mergeSort(first);
  const sortedSecond = sort.mergeSort(second);

  const length = sortedFirst.length;

  let result = 0;
  let repetition = 1;
  let lastIndex = 0;

  for (let i = 0; i < length; i++) {
    if (sortedFirst[i] === sortedFirst[i + 1]) {
      repetition++;
      continue;
    }
    const { occurences, index } = calculateOccurences(
      sortedSecond,
      sortedFirst[i],
      lastIndex
    );

    result += repetition * sortedFirst[i] * occurences;
    repetition = 1;
    lastIndex = index;
  }

  return result;
}
