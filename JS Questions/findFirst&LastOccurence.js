// Find first and last positions of an element in a sorted array
// Function for finding first and last occurrence of x
function find(arr, x) {
  let n = arr.length;

  // Initialize first and last index
  let first = -1,
    last = -1;

  for (let i = 0; i < n; i++) {
    // If x is different, continue
    if (x !== arr[i]) continue;

    // If first occurrence found
    if (first === -1) first = i;

    // Update last occurrence
    last = i;
  }
  let res = [first, last];
  return res;
}

let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
let x = 5;
let res = find(arr, x);
console.log(res[0] + " " + res[1]);

// Function for finding first and last occurrence of x
function findFirst(arr, x) {
  let n = arr.length;

  // Initialize low and high index
  let low = 0,
    high = n - 1;

  // Initialize first occurrence
  let first = -1;

  // Find first occurrence of x
  while (low <= high) {
    // Find the mid index
    let mid = Math.floor((low + high) / 2);

    // If x is equal to arr[mid]
    if (x === arr[mid]) {
      first = mid;
      high = mid - 1;
    }

    // If x is less than arr[mid],
    // then search in the left subarray
    else if (x < arr[mid]) high = mid - 1;
    // If x is greater than arr[mid],
    // then search in the right subarray
    else low = mid + 1;
  }
  return first;
}

function findLast(arr, x) {
  let n = arr.length;

  // Initialize low and high index
  let low = 0,
    high = n - 1;

  // Initialize last occurrence
  let last = -1;

  // Find last occurrence of x
  while (low <= high) {
    // Find the mid index
    let mid = Math.floor((low + high) / 2);

    // If x is equal to arr[mid]
    if (x === arr[mid]) {
      last = mid;
      low = mid + 1;
    }

    // If x is less than arr[mid],
    // then search in the left subarray
    else if (x < arr[mid]) high = mid - 1;
    // If x is greater than arr[mid],
    // then search in the right subarray
    else low = mid + 1;
  }
  return last;
}

function find(arr, x) {
  let n = arr.length;

  // Find first and last index
  let first = findFirst(arr, x);
  let last = findLast(arr, x);

  let res = [first, last];
  return res;
}

let arr2 = [1, 3, 5, 5, 5, 5, 67, 123, 125]; // 2 5

let x2 = 5;
let res2 = find(arr2, x2);
console.log(res2[0] + " " + res2[1]);
