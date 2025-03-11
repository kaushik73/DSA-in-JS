// Array.from()
// Creates a new array from an array-like or iterable object (e.g., strings, maps, sets).
// Can also apply a mapping function to each element.

// Array.to() This method does not exist in JavaScript.
// You might be thinking of Array.toString(), which converts an array to a comma-separated string:

// Array.of() :  is a method that creates a new array with a variable number of arguments,
// regardless of the number or type of the arguments.
// It is a more straightforward way to create arrays from arguments compared to the Array constructor.

const numbers = Array.from({ length: 25 }, (_, index) => index * 5);

const str = "Hello";
const arr = Array.from(str); // ['H', 'e', 'l', 'l', 'o']

let str3 = "Hello";
let arrayFromString = Array.from(str3, (x) => x.toUpperCase()); // ['H', 'E', 'L', 'L', 'O']

const numbers1 = [1, 2, 3];
const doubled = Array.from(numbers1, (x) => x * 2); // [2, 4, 6]

let set = new Set([1, 2, 3]);
let arrayFromSet = Array.from(set); // [1, 2, 3]

let map = new Map({ a: 1, b: 2, c: 3 });
let map2 = new Map().set("GFG", 1).set("Geeks", 2);

let arrayFromMap = Array.from(map); // [['a', 1], ['b', 2], ['c', 3]]
let a = Array.from(map2.keys()); // ['GFG', 'Geeks']
let b = Array.from(map2.values()); // [1, 2]

// --------------------------------------------
const fruits = ["apple", "banana", "orange"];
const str1 = fruits.toString(); // "apple,banana,orange"

// --------------------------------------------
let arr1 = Array.of(1, 2, 3, 4, 5);
console.log(arr1); // [1, 2, 3, 4, 5]

let arr2 = Array.of(10);
console.log(arr2); // [10]
