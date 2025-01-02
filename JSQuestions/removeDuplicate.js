// Write a program to remove duplicates from an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];

let s = new Set(arr);

let ans = [];

// List all Elements
for (const x of s.entries()) {
  ans.push(x);
}

// s.forEach((x) => {
//   ans.push(x);
// });

console.log(ans, " : one"); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

let m = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

let ans1 = [];

// for (const x of m.entries()) {
//   ans1.push(x[0]);
// }

m.forEach((x) => {
  ans1.push(x);
});

console.log(ans1, " : two"); // Output: ['a', 'b', 'c']

// Convert the Set back to an array
// let ans = Array.from(s);

// Convert the Set back to an array
// console.log(Array.from(m.values())); // Output: ['a', 'b', 'c']
