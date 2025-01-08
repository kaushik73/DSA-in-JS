Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Example usage
const filteredArr = arr.myFilter((x) => x % 2 === 0);
console.log(filteredArr); // Output: [2, 4]
