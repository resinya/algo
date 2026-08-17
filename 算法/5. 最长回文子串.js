var longestPalindrome = function (s) {
  const len = s.length;
  if (s.length < 2) return s;
  let maxLen = 1;
  function extend(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.slice(l + 1, r);
  }
  //返回长度
  for (let i = 0; i < s.length; i++) {
    const odd = extend(i, i);
    const even = expand(i, i + 1);
    const curMax = odd.length > even.length ? odd : even;
    if (curMax.length > maxStr.length) maxStr = curMax;
  }
  return maxStr;
};
