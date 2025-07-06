/*
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements 
if they are in the wrong order. This algorithm is not suitable for large data sets as its average and 
worst-case time complexity are quite high.

We sort the array using multiple passes. After the first pass, the maximum element goes to end (its 
correct position). Same way, after second pass, the second largest element goes to second last 
position and so on.

In every pass, we process only those elements that have already not moved to correct position. 
After k passes, the largest k elements must have been moved to the last k positions.

In a pass, we consider remaining elements and compare all adjacent and swap if larger element is 
before a smaller element. If we keep doing this, we get the largest (among the remaining elements) 
at its correct position.

--> doo pass valo ko swap karte jao, 1st iteration k baad max element hoga sabse last m.
*/

// len-i-1 because after each pass, the largest element is already in its correct position, so we don't need to check it again
// Eg - after 0 index (first) pass, the largest element is at last index
// after 1 index (second) pass, the second largest element is at second last

function bubbleSort(arr) {
  const len = arr.length;
  let swapped;

  for (let i = 0; i < len; i++) {
    swapped = false;

    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    // IF no two elements were swapped by inner loop, then break
    if (swapped == false) break;
  }
}

function printArray(arr) {
  console.log(arr.join(" "));
}

const arr = [2, 6, 3, 91, 6, 98, 32, 56];
console.log("Original array: ");
printArray(arr);

bubbleSort(arr);

console.log("Sorted array: ");
printArray(arr);
