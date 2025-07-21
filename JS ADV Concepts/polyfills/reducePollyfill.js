// Explanation:
// The myReduce function iterates over the array and applies the callback function
// to each element, accumulating the result in acc.
// If initial_value is provided, it uses that as the starting point; otherwise, it uses the first element of the array.

Array.prototype.myReduce = function (callback, initial_value) {
  var acc = initial_value;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i], i, this) : this[i];
  }
  return acc;
};

// Example usage
const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum); // Output: 10
