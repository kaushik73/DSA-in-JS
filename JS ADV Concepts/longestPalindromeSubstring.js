/**
 * @param {string} str
 * @return {string}
 */

export default function longestPalindromeSubstring(str) {
  let ans = "";
  function longPalindrome(left, right) {
    while (str[left] && str[right] && str[left] === str[right]) {
      left--;
      right++;
    }

    if (ans.length < right - left - 1) {
      ans = str.slice(left + 1, right);
    }
  }

  for (let i = 0; i < str.length; i++) {
    longPalindrome(i, i + 1);
    longPalindrome(i, i);
  }
  return ans;
}
