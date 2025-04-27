// Find the max count of consecutive 1’s in an array ?
// Find the max count of consecutive 1’s in an array

function findMaxConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// Example usage
const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1];
console.log(findMaxConsecutiveOnes(arr)); // Output: 3
