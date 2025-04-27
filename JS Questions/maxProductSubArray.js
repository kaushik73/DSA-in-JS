// Samaj nahi aaya hai :
export default function maxProductSubArray(numbers) {
  if (numbers.length === 0) return 0;

  // Initialize variables to store the maximum product, minimum product and result
  let maxProduct = numbers[0];
  let minProduct = numbers[0];
  let result = numbers[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < numbers.length; i++) {
    const num = numbers[i];

    // If the current number is negative, swap maxProduct and minProduct
    if (num < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    // Calculate the maximum and minimum products up to the current position
    maxProduct = Math.max(num, maxProduct * num);
    minProduct = Math.min(num, minProduct * num);

    // Update the result with the maximum product found so far
    result = Math.max(result, maxProduct);
  }

  return result;
}

// Example usage
const numbers = [2, 3, -2, 4];
console.log(maxProductSubArray(numbers)); // Output: 6 (subarray [2, 3])
