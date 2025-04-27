// Prefix Sum involves preprocessing an array to create a new array where each element at index i represents the sum of the array from the start up to i. This allows for efficient sum queries on subarrays.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ans = [];

ans.push(a[0]);

for (let i = 1; i < a.length; i++) {
  ans.push(a[i] + ans[i - 1]);
}

console.log(ans); // [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]

// Input: nums = [1, 2, 3, 4, 5, 6], i = 1, j = 3
// Output: 9
let sum = 0;
for (let x = i; x <= j; x++) {
  sum += nums[x];
}

console.log(sum, "sum");
