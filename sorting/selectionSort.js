/*
Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the
smallest (or largest) element from the unsorted portion and swapping it with the first unsorted 
element. This process continues until the entire array is sorted.

First we find the smallest element and swap it with the first element. This way we get the smallest
element at its correct position.

Then we find the smallest among remaining elements (or second smallest) and move it to its correct 
position by swapping.

Then we keep doing this until we get all elements moved to correct position.
*/
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
}

function printArray(arr) {
  for (let val of arr) {
    process.stdout.write(val + " ");
  }
  console.log();
}

const arr = [2, 6, 3, 91, 6, 98, 32, 56];
console.log("Original array: ");
printArray(arr);

selectionSort(arr);

console.log("Sorted array: ");
printArray(arr);
