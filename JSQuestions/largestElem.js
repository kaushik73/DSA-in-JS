// Write a JavaScript program to find the largest element in a nested array.
//  [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

function largestElem(arr) {
  let largest = -Infinity;
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      largest = Math.max(largest, largestElem(elem));
    } else {
      largest = Math.max(largest, elem);
    }
  }
  return largest;
}

function largestElem1(arr) {}
