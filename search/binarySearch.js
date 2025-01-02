/*
Binary Search Algorithm is a searching algorithm used in a sorted array by repeatedly dividing the search interval 
in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). 



*/

function binarySearch(arr, x) {
  const len = arr.length;
  let low = 0,
    mid = len / 2,
    high = len - 1;

  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === x) {
      return "Element Found at index " + mid;
    }

    if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "Element not found";
}

function printArray(arr) {
  console.log(arr.join(" "));
}

const arr = [2, 3, 6, 11, 16, 32, 56, 67, 98];

console.log(binarySearch(arr, 56));
