"use strict"; // Day 2 / Exercise 01

const assert = require("node:assert/strict");

/**
 * 中文解释（已给出）：在字符串中寻找不含重复字符的最长连续片段，只返回它的长度。
 * 输入：字符串 s，例如 "abcabcbb"。
 * 输出：最长无重复连续子串的字符数；空字符串返回 0。
 * 具体例子："pwwkew" -> 3，对应 "wke"；"pwke" 不是连续子串，不能作为答案。
 * 关键边界：重复字符可能出现在窗口中间；右边界不能访问 s.length。
 * @param {string} s
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
  // TODO: 在这里写你的实现
  // throw new Error("TODO: implement lengthOfLongestSubstring");
  if (s === "") return 0;
  let slow = 0,
    fast = 0;
  let maxLen = -Infinity;
  const map = new Map();
  while (slow <= fast && fast < s.length) {
    if (map.has(s[fast])) {
      map.delete(s[slow]);
      slow++;
    } else {
      map.set(s[fast], fast);
      fast++;
    }

    maxLen = Math.max(maxLen, fast - slow);
  }
  return maxLen;
}

function runTests() {
  assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);
  assert.equal(lengthOfLongestSubstring("bbbbb"), 1);
  assert.equal(lengthOfLongestSubstring("pwwkew"), 3);
  assert.equal(lengthOfLongestSubstring("abba"), 2);
  assert.equal(lengthOfLongestSubstring(""), 0);
  assert.equal(lengthOfLongestSubstring("dvdf"), 3);
  console.log("✅ 01 longest unique substring tests passed");
}

if (require.main === module) runTests();
module.exports = { lengthOfLongestSubstring };
