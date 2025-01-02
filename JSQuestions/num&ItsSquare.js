// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

function numAndItsSquare(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let key in arr1) {
    if (arr1[key] ** 2 !== arr2[key]) {
      return false;
    }
  }

  return true;
}

console.log(numAndItsSquare([1, 2, 3], [1, 4, 9])); // Output: true
console.log(numAndItsSquare([1, 2, 3], [1, 4, 8])); // Output: false
