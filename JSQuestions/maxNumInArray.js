// Write a JavaScript program to find the maximum number in an array.

function maxNumInArray1(arr) {
  return Math.max(...arr);
}

function maxNumInArrayTHEBEST(arr) {
  return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

function maxNumInArray2(arr) {
  return arr.sort((a, b) => b - a)[0];
}

// Example usage
const numbers = [1, 2, 3, 14, 5, 6, 7, 8, 9];
console.log(maxNumInArrayTHEBEST(numbers));
