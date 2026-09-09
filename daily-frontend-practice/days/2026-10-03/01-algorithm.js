"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：第 K 大元素：用最小堆或快速选择实现；不得直接完整排序作为最终方案。
 *
 * 中文解释（已给出）：这道题要你完成：第 K 大元素：用最小堆或快速选择实现；不得直接完整排序作为最终方案。
 * 输入：未排序数组 nums 与整数 k。
 * 输出：按大小排序后的第 k 大元素。
 * 具体例子：[3,2,1,5,6,4], k=2 -> 5。
 * 关键边界：k 必须在 1..n；不能把完整排序作为最终方案。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-03 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

