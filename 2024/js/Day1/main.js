const transform = require("./transform");

const fileName = "input.txt";

function main() {
  const { first, second } = transform.processFile(fileName);
  const sortedFirst = mergeSort(first);
  const sortedSecond = mergeSort(second);

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

// Merge Sort Function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// Merge function to merge two sorted arrays
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate remaining elements (if any)
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
