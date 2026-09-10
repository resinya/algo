"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：最长回文子串：返回最长连续回文串；使用中心扩散，处理奇偶长度中心。
 *
 * 中文解释（已给出）：这道题要你完成：最长回文子串：返回最长连续回文串；使用中心扩散，处理奇偶长度中心。
 * 输入：字符串 s。
 * 输出：s 中最长的连续回文子串。
 * 具体例子：s="babad" -> "bab" 或 "aba"；s="cbbd" -> "bb"。
 * 关键边界：空字符串返回 ""；要同时检查单字符中心和双字符中心。
 *
 * 编码前请先复述并画出关键状态：
 * 1. 用自己的话复述上面的输入与输出。
 * 2. 维护哪些状态/数据结构？
 * 3. 至少一个边界是什么？
 */

//aa
function solve(input) {
  // throw new Error("TODO: 请按题目要求实现");
  //!子串的题目，一般双指针
  if (!input || input.length <= 1) return input;
  let maxLen = 1;
  let start = 0;
  function expand(left, right) {
    while (left >= 0 && right < input.length && input[left] === input[right]) {
      left--;
      right++;
    }
    // 退出循环时，有效回文区间为 [left + 1, right - 1]
    let curLen = right - left - 1;
    if (curLen > maxLen) {
      maxLen = curLen;
      start = left + 1;
    }
  }
  for (let i = 0; i < input.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }
  return input.subString(start, start + maxLen);
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-04 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
