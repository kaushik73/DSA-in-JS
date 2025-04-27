const ascSort = (arr) => {
  return arr.sort((a, b) => a - b);
};

const descSort = (arr) => {
  return arr.sort((a, b) => b - a);
};

console.log(ascSort([1, 3, 2, 5, 4])); // [1, 2, 3, 4, 5]
console.log(descSort([1, 3, 2, 5, 4])); // [5, 4, 3, 2, 1]
