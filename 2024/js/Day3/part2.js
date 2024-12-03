const transform = require("./transform");

const fileName = "input.txt";

function main() {
  let gibberish = transform.processFile(fileName);
  let sum = 0;

  const traverse = (str) => {
    let idx = str.indexOf("mul(");

    if (idx < 0) return null;
    idx = idx + 4;

    let first = 0;
    let second = 0;

    while (!Number.isNaN(parseInt(str[idx]))) {
      first = first * 10 + parseInt(str[idx]);
      idx++;
    }

    if (first === 0 || first > 999) {
      idx++;
      return traverse(str.substring(idx));
    }

    if (str[idx] !== ",") {
      idx++;
      return traverse(str.substring(idx));
    }

    idx++;

    while (!Number.isNaN(parseInt(str[idx]))) {
      second = second * 10 + parseInt(str[idx]);
      idx++;
    }

    if (second === 0 || second > 999) {
      idx++;
      return traverse(str.substring(idx));
    }

    if (str[idx] !== ")") {
      idx++;
      return traverse(str.substring(idx));
    }

    sum += first * second;
    traverse(str.substring(idx + 1));
  };

  let backup = gibberish;

  while (true) {
    const dontIdx = backup.indexOf("don't()");
    const chunk = backup.substring(0, dontIdx < 0 ? undefined : dontIdx + 7);
    traverse(chunk);
    backup = backup.substring(dontIdx + 7);
    const doIndex = backup.indexOf("do()");
    if (doIndex < 0) break;
    backup = backup.substring(doIndex + 4);
  }

  return sum;
}

console.log(main());
