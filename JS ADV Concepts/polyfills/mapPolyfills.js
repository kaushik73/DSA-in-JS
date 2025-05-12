Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

// Example usage
const arr = [1, 2, 3, 4];
const mappedArr = arr.myMap((x) => x * 2);
console.log(mappedArr); // Output: [2, 4, 6, 8]
