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
*/

function bubbleSort(arr) {
  const len = arr.length;
  let swapped;

  for (let i = 0; i < len - 1; i++) {
    swapped = false;

    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
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
