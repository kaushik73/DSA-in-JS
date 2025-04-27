/**
 * Function to find the index of target in a sorted and rotated array
 * @param {number[]} numbers - sorted and rotated array of unique elements
 * @param {number} target - target value to find
 * @return {number} - index of target if found, otherwise -1
 */
export default function findInRotatedArray(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Check if the mid element is the target
    if (numbers[mid] === target) {
      return mid;
    }

    // Determine which part is sorted
    if (numbers[left] <= numbers[mid]) {
      // Left part is sorted
      if (target >= numbers[left] && target < numbers[mid]) {
        right = mid - 1; // Search in the left part
      } else {
        left = mid + 1; // Search in the right part
      }
    } else {
      // Right part is sorted
      if (target > numbers[mid] && target <= numbers[right]) {
        left = mid + 1; // Search in the right part
      } else {
        right = mid - 1; // Search in the left part
      }
    }
  }

  // Target is not found
  return -1;
}

// Example usage
const numbers = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(findInRotatedArray(numbers, target)); // Output: 4
