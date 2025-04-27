/**
 * Function to find the smallest element in a rotated sorted array
 * @param {number[]} numbers - rotated sorted array of unique elements
 * @return {number} - smallest element in the array
 */
export default function findSmallestInRotatedArray(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  // If the array is not rotated (the smallest element is at the first position)
  if (numbers[left] < numbers[right]) {
    return numbers[left];
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Check if the mid element is the smallest
    if (numbers[mid] > numbers[mid + 1]) {
      return numbers[mid + 1];
    }

    // Check if the mid-1 element is the smallest
    if (numbers[mid - 1] > numbers[mid]) {
      return numbers[mid];
    }

    // Decide which half to continue the search
    if (numbers[mid] > numbers[left]) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // This line should never be reached if the input array is valid
}

// Example usage
const numbers = [4, 5, 6, 7, 0, 1, 2];
console.log(findSmallestInRotatedArray(numbers)); // Output: 0
