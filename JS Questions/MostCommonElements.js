function mostCommonElements(numbers, k) {
  let countMap = new Map();

  for (let num of numbers) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let countArr = Array.from(countMap.entries());

  countArr.sort((a, b) => b[1] - a[1]);

  let ans = countArr.slice(0, k).map((entry) => entry[0]);

  return ans;
}

mostCommonElements([1, 1, 1, 2, 2, 3], 2); // [1, 2]
mostCommonElements([1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1], 3); // [1, 2, 3]
mostCommonElements([1, 1, 1, 2, 2, 3], 3); // [1, 2, 3]
