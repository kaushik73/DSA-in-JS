Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

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
const arr = [1, 2, 3, 4];
const mappedArr = arr.myMap((x) => x * 2);
console.log(mappedArr); // Output: [2, 4, 6, 8]

// Example usage
const filteredArr = arr.myFilter((x) => x % 2 === 0);
console.log(filteredArr); // Output: [2, 4]
