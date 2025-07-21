function lengthOfLongestSubstring(s) {
  let m = new Map();
  let left = 0;
  let ans = 0;
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    if (m.has(char) && m.get(char) >= left) {
      left = m.get(char) + 1;
    }
    m.set(char, right);
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
