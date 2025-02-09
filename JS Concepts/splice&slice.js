/*
Slice:
Purpose: Creates a new array containing a portion of the original array, without modifying the original array.
Syntax: array.slice(start, end)
start: The index at which to begin extraction (inclusive).
end: The index at which to end extraction (exclusive).


Splice:
Purpose: Modifies the original array by removing or replacing elements, and can also add new elements.
Syntax: array.splice(start, deleteCount, item1, item2, ...)
start: The index at which to start changing the array.
deleteCount: The number of elements to remove (optional).
item1, item2, ...: The elements to add to the array, starting at the start index (optional).
*/

/*
const cloneArray = (arr) => arr.slice();

const replaceElements = (arr, start, count, ...newElements) =>
  arr.splice(start, count, ...newElements);

const splitArray = (arr, pos) => {
  let fp = arr.slice(0, pos);
  let sp = arr.slice(pos);

  return [fp, sp];
};
let str = "Hello, world!";
let arr = [1, 2, 3, 4, 5, 6, 7];
let arr1 = [1, 2, 3, 4, 5, 6];

// Extract the first three elements using slice.
// console.log(arr.slice(0,3));

// Extract elements from the 4th position to the end using slice.
// console.log(arr.slice(3));

// Extract the last two elements using slice.
// console.log(arr.slice(-2));

// make clone of arr :
// console.log(cloneArray(arr));
// extract world from string :

// console.log(str.slice(-6,-1));

// make a reverse copy of an array without modifying the original array.
const reverseArray = (arr) => {
  return arr.slice().reverse();
};
console.log(reverseArray(arr)); // Output: [4, 3, 2, 1]

// Separate odd and even numbers from an array.
const separateEvenOdd = (arr) => {
  let evenNumbers = arr.slice().filter((num) => num % 2 === 0);
  let oddNumbers = arr.slice().filter((num) => num % 2 !== 0);
  return [evenNumbers, oddNumbers];
};
let [evenNumbers, oddNumbers] = separateEvenOdd(arr);
console.log(evenNumbers); // Output: [2, 4, 6]
console.log(oddNumbers); // Output: [1, 3, 5, 7]

// Splice
//  Remove the 3rd and 4th elements.
arr1.splice(2, 2);
console.log(arr1);

// Insert 10 and 20 at index 2
arr1.splice(2, 0, 10, 20);
console.log(arr1);

let arr2 = [1, 2, 3, 4, 5];
replaceElements(arr2, 1, 2, 10, 20);
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5];
let result = splitArray(arr3, 3);
console.log(result);

const takeEverySecond = (arr) => {
  for (let i in arr) {
    arr.splice(i, 1);
  }
  return arr;
};

let arr4 = [1, 2, 3, 4, 5, 6];
console.log(takeEverySecond(arr4)); // Output: [2, 4, 6]
*/

let arr5 = [1, 2, 3];
arr5.splice(3, 0, 4, 5, 6);
console.log(arr5); // Output: [1, 2, 3, 4, 5, 6]
arr5.splice(3, 0, 10, 20, 30);
console.log(arr5); // Output: [1, 2, 3, 10, 20, 30, 4, 5, 6]

let arr6 = [1, 10, 15, 20, 25];
const replaceIfGreaterThan = (arr, limit, value) => {
  for (let i in arr) {
    if (arr[i] > limit) {
      arr.splice(i, 1, value);
    }
  }
  return arr;
};
replaceIfGreaterThan(arr6, 15, 0);
console.log(arr6); // Output: [1, 10, 15, 0, 0]

let arr7 = [1, 2, 3, 4, 5];
let subarray = [10, 20];
replaceWithSubarray(arr7, 2, subarray);

function replaceWithSubarray(arr, start, subarray) {
  arr.splice(start, subarray.length, ...subarray);
}
console.log(arr7); // Output: [1, 2, 10, 20, 5]

let arr8 = [1, 2, 5, 6];
let subarray1 = [3, 4];
const splitAndMerge = (arr, idx, subarray) => {
  return arr.splice(idx, 0, ...subarray);
};
splitAndMerge(arr8, 2, subarray1);
console.log(arr8); // Output: [1, 2, 3, 4, 5, 6]
