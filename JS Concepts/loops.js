// for...of Definition: Iterates over iterable objects (e.g., arrays, strings, maps, sets) and gives values.
// for...in Definition: Iterates over enumerable properties of an object (keys or indices). (e.g object, array)
// forEach Definition: Executes a callback function once for each element in an array.
// at : Retrieves the element at a specific index (positive or negative) of an array or string.

let arr = [10, 20, 30];
let obj = { a: 11, b: 12, c: 13 };
let nums = [1, 2, 3];
let str = "hello";

let map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

let set = new Set([100, 200, 300]);

console.log("-----------For of loop-----------------\n");

// For Array
for (const val of arr) console.log(val);
// Output:
// 10
// 20
// 30

// For Object (not iterable)
try {
  for (const [key, value] of obj) console.log(key, value);
} catch (error) {
  console.log("Error: `obj` is not iterable.");
}

// For String
for (const char of str) console.log(char);
// Output:
// h
// e
// l
// l
// o

// For Map
for (const [key, value] of map) console.log(key, value);
// Output:
// key1 value1
// key2 value2
// key3 value3

// For Set
for (const val of set) console.log(val);
// Output:
// 100
// 200
// 300

console.log("\n-----------For in loop-----------------\n");

// For Array (indexes)
for (const val in arr) console.log(val);
// Output:
// 0
// 1
// 2

// For Object (keys)
for (const key in obj) console.log(key);
// Output:
// a
// b
// c

// For String (indexes)
for (const char in str) console.log(char);
// Output:
// 0
// 1
// 2
// 3
// 4

// For Map (not supported)
try {
  for (const val in map) console.log(val);
} catch (error) {
  console.log("Error: `for...in` is not supported for Map.");
}

// For Set (not supported)
try {
  for (const val in set) console.log(val);
} catch (error) {
  console.log("Error: `for...in` is not supported for Set.");
}

console.log(
  "\n-----------Examples of Map and Set with other methods-----------------\n"
);

// Map - Iterating keys, values, and entries
console.log("Map keys:");
map.forEach((value, key) => console.log(key));
// Output:
// key1
// key2
// key3

console.log("Map values:");
map.forEach((value) => console.log(value));
// Output:
// value1
// value2
// value3

console.log("Map entries:");
map.forEach((value, key) => console.log(key, value));
// Output:
// key1 value1
// key2 value2
// key3 value3

// Set - Iterating over values
console.log("Set values:");
set.forEach((value) => console.log(value));
// Output:
// 100
// 200
// 300

console.log("-----------For at loop-----------------\n");

// SyntaxError: `for...at` is not valid JavaScript syntax for all below examples.
/*
for (const val at arr) console.log(val); 
for (const [key, value] at obj) console.log(key, value); 
for (const key at obj) console.log(key); 
for (const char at str) console.log(char); 
*/

nums.forEach((num) => console.log(num * 2));
// Output:
// 2
// 4
// 6

console.log(str.at(-1));
// Output: o
