const transform = require("./transform");

const fileName = "input.txt";

const traverseAndFound = (array, x, y) => {
  let count = 0;
  if (
    array[y]?.[x + 1] === "M" &&
    array[y]?.[x + 2] === "A" &&
    array[y]?.[x + 3] === "S"
  ) {
    count++;
  }
  if (
    array[y]?.[x - 1] === "M" &&
    array[y]?.[x - 2] === "A" &&
    array[y]?.[x - 3] === "S"
  ) {
    count++;
  }
  if (
    array[y + 1]?.[x] === "M" &&
    array[y + 2]?.[x] === "A" &&
    array[y + 3]?.[x] === "S"
  ) {
    count++;
  }
  if (
    array[y - 1]?.[x] === "M" &&
    array[y - 2]?.[x] === "A" &&
    array[y - 3]?.[x] === "S"
  ) {
    count++;
  }
  if (
    array[y - 1]?.[x - 1] === "M" &&
    array[y - 2]?.[x - 2] === "A" &&
    array[y - 3]?.[x - 3] === "S"
  ) {
    count++;
  }
  if (
    array[y - 1]?.[x + 1] === "M" &&
    array[y - 2]?.[x + 2] === "A" &&
    array[y - 3]?.[x + 3] === "S"
  ) {
    count++;
  }
  if (
    array[y + 1]?.[x + 1] === "M" &&
    array[y + 2]?.[x + 2] === "A" &&
    array[y + 3]?.[x + 3] === "S"
  ) {
    count++;
  }
  if (
    array[y + 1]?.[x - 1] === "M" &&
    array[y + 2]?.[x - 2] === "A" &&
    array[y + 3]?.[x - 3] === "S"
  ) {
    count++;
  }

  return count;
};

function main() {
  const array2D = transform.processFile(fileName);

  const xLength = array2D[0].length;
  const yLength = array2D.length;

  let count = 0;

  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {
      if (array2D[y][x] === "X") {
        const subCount = traverseAndFound(array2D, x, y);
        count += subCount;
      }
    }
  }

  return count;
}

console.log(main());
