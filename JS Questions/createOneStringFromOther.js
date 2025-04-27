// Given two strings. Find if one string can be formed by rearranging the letters of other string.

function createOneStringFromOther(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(createOneStringFromOther("abc", "bca")); // Output: true
console.log(createOneStringFromOther("abc", "def")); // Output: false
