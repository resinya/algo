"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：滑动窗口最大值：用单调队列实现 `O(n)`。
 *
 * 中文解释（已给出）：这道题要你完成：滑动窗口最大值：用单调队列实现 `O(n)`。
 * 输入：数组 nums 与窗口大小 k。
 * 输出：每个长度 k 窗口的最大值数组，目标 O(n)。
 * 具体例子：nums=[1,3,-1,-3,5,3,6,7], k=3 -> [3,3,5,5,6,7]。
 * 关键边界：单调队列保存下标；移除过期下标和被新值支配的尾部。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-19 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

