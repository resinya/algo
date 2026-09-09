"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：快速排序：实现纯函数版本；选择 pivot 并说明最坏情况。
 *
 * 中文解释（已给出）：这道题要你完成：快速排序：实现纯函数版本；选择 pivot 并说明最坏情况。
 * 输入：可比较数字数组 nums。
 * 输出：升序的新数组，不修改 nums。
 * 具体例子：[3,1,2] -> [1,2,3]，原数组仍为 [3,1,2]。
 * 关键边界：空数组、重复值和已排序数组；pivot 选择会影响最坏 O(n^2)。
 *
 * 编码前请先复述并画出关键状态：
 * 1. 用自己的话复述上面的输入与输出。
 * 2. 维护哪些状态/数据结构？
 * 3. 至少一个边界是什么？
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-13 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
