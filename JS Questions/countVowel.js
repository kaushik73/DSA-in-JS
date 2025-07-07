function countVowelsMine(str) {
  // Your implementation
  let inputArr = Array.from(str);
  let countOfVowels = 0;
  for (let char of inputArr) {
    if (
      char.toLowerCase() === "a" ||
      char.toLowerCase() === "e" ||
      char.toLowerCase() === "i" ||
      char.toLowerCase() === "o" ||
      char.toLowerCase() === "u"
    )
      countOfVowels++;
  }
  return countOfVowels;
}

function countVowelsOptimzed(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}
// Example usage:
console.log(countVowelsMine("Hello World")); // Output: 3
console.log(countVowelsMine("Kaushik Jain")); // Output: 5
console.log(countVowelsOptimzed("Kaushik Jain")); // Output: 5
console.log(countVowelsOptimzed("aeiou")); // Output: 5
