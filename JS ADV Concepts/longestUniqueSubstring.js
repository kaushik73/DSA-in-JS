// Window sliding technique.

export default function longestUniqueSubstring(str) {
  let start = 0;
  let maxLen = 0;
  const seen = new Map();

  for (let currIdx = 0; currIdx < str.length; currIdx++) {
    const char = str[currIdx];

    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }

    seen.set(char, currIdx);
    maxLen = Math.max(maxLen, currIdx - start + 1);
  }

  return maxLen;
}
