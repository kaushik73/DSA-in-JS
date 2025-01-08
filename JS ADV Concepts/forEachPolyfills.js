Array.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      callback(this[i], i, this);
    }
  }
};

// Example usage
const arr = [1, 2, 3, 4];
arr.forEach((x) => console.log(x * 2)); // Output: 2 4 6 8
