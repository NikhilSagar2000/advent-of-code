module.exports = (array) => {
  let isDecreasing = undefined;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) return false;
    const newIsDecreasing = array[i] > array[i + 1];
    if (isDecreasing === undefined) {
      isDecreasing = newIsDecreasing;
    } else if (newIsDecreasing !== isDecreasing) return false;
    if (Math.abs(array[i] - array[i + 1]) > 3) return false;
  }

  return true;
};
