/*
Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct 
position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the 
sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.

We start with second element of the array as first element in the array is assumed to be sorted.

Compare second element with the first element and check if the second element is smaller then swap them.

Move to the third element and compare it with the first two elements and put at its correct position
Repeat until the entire array is sorted.

*/

function insertionSort(arr) {
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

insertionSort(arr);

console.log("Sorted array: ");
printArray(arr);
