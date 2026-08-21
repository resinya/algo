"use strict"; // Day 2 / Exercise 01

const assert = require("node:assert/strict");

/** @param {string} s @returns {number} */
function lengthOfLongestSubstring(s) {
  // TODO: 在这里写你的实现
  throw new Error("TODO: implement lengthOfLongestSubstring");
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
