/*
[^a-z]	So this matches any character that is NOT a lowercase letter.
/.../g	The g flag stands for global, meaning replace all matches, not just the first one

Anagram : Two strings are anagrams if they contain the same characters in the same frequency, ignoring case and non-alphabetic characters.

*/
function isAnagramMine(str1, str2) {
  let m1 = new Map();
  for (let char of str1) {
    char = char.toLowerCase();
    if (/[a-z]/.test(char)) {
      m1.set(char, m1.get(char) + 1 || 1);
    }
  }
  for (let char2 of str2) {
    char2 = char2.toLowerCase();
    if (/[a-z]/.test(char2)) {
      if (m1.has(char2) && m1.get(char2) > 0) {
        m1.set(char2, m1.get(char2) - 1);
      } else {
        return false;
      }
    }
  }
  return true;
}

function isAnagramOptimized(str1, str2) {
  const sanitize = (str) => str.toLowerCase().replace(/[^a-z]/g, "");

  const s1 = sanitize(str1);
  const s2 = sanitize(str2);

  if (s1.length !== s2.length) return false;

  const count = new Map();

  for (let char of s1) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (let char of s2) {
    if (!count.has(char) || count.get(char) === 0) {
      return false;
    }
    count.set(char, count.get(char) - 1);
  }

  return true;
}

// Example usage:
console.log(isAnagramMine("listen", "silent")); // true
console.log(isAnagramMine("HeLLo!!", "Olelh")); // true
console.log(isAnagramMine("Hello Kaushik", "kauShi khello")); // true
