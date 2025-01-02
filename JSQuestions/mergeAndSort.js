// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

function mergeAndSort(arr1, arr2) {
  console.log(arr1.concat(arr2).sort((a, b) => a - b));
}

function mergeAndSort1(arr1, arr2) {
  console.log([...arr1, ...arr2].sort((a, b) => a - b));
}

mergeAndSort([0, 3, 4, 31], [4, 6, 30]); // Output: [0, 3, 4, 4, 6, 30, 31]
