var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let l = 0;
  let maxLen = 0;
  for (let r = 0; r < s.length; r++) {
    while (map.has(s[r])) {
      map.delete(s[l]);
      l++;
    }
    map.set(s[r], 1);
    maxLen = Math.max(r - l + 1, maxLen);
  }
  return maxLen;
};
