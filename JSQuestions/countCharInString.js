function countCharInStr(str) {
  let m = new Map();

  for (let char of str) {
    if (m.has(char)) {
      m.set(char, m.get(char) + 1);
    } else {
      m.set(char, 1);
    }
  }

  // 3 methods to iterate over a Map :
  m.forEach((val, key) => {
    console.log(key + " = " + val);
  });

  for (let [key, value] of m) {
    console.log(key + " = " + value);
  }

  for (let x of m.entries()) {
    console.log(x[0] + " = " + x[1]);
  }
}
countCharInStr("kaushik");
