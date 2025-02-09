const findKSmallest = (arr, k) => {
  arr.sort((a, b) => a - b);

  console.log(arr[k - 1]);
};

const partition = (arr, left, right) => {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
};

const quickselect = (arr, left, right, k) => {
  if (left === right) return arr[left];
  const pivotIndex = partition(arr, left, right);
  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickselect(arr, left, pivotIndex - 1, k);
  } else {
    return quickselect(arr, pivotIndex + 1, right, k);
  }
};

const findKSmallestQuickselect = (arr, k) => {
  return quickselect(arr, 0, arr.length - 1, k - 1);
};

// Example usage

findKSmallest([1, 12, 3, 14, 15, 66, 7, 18, 89], 3); // 7
console.log(findKSmallestQuickselect([1, 12, 3, 14, 15, 66, 7, 18, 89], 3)); // Output: 7
