// Implement a javascript function that flattens a nested array into a single-dimensional array.

const flattenArray = (arr) => {
  let flattendArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattendArray = flattendArray.concat(flattenArray(arr[i]));
    } else {
      flattendArray.push(arr[i]);
    }
  }

  return flattendArray;
};

console.log(flattenArray([1, [2, [3, [4]], 5], [2, [3, 4, [5, 7]]]]));
