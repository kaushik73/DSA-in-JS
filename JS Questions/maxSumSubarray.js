/**
 * Function to find the maximum sum of a contiguous subarray
 * @param {number[]} numbers - array of integers
 * @return {number} - maximum sum of contiguous subarray
 */
function maxSubArraySum(numbers) {
  // Initialize variables to store the current subarray sum and the maximum subarray sum
  let currentSum = 0;
  let maxSum = -Infinity;

  // Iterate through the array
  for (let i = 0; i < numbers.length; i++) {
    // Add the current element to the current subarray sum
    currentSum += numbers[i];

    // Update the maximum subarray sum if the current subarray sum is greater
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    // If the current subarray sum is negative, reset it to 0
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  // Return the maximum subarray sum
  return maxSum;
}

// Example usage
const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(numbers)); // Output: 6 (subarray [4, -1, 2, 1])
