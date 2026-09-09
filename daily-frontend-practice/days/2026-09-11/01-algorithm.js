"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：二分查找：在有序数组中找目标，找不到返回 `-1`；明确循环不变式与边界区间。
 *
 * 中文解释（已给出）：这道题要你完成：二分查找：在有序数组中找目标，找不到返回 `-1`；明确循环不变式与边界区间。
 * 输入：升序数组 nums 与目标值 target。
 * 输出：目标下标；不存在返回 -1。
 * 具体例子：nums=[1,3,5,7], target=5 -> 2；target=4 -> -1。
 * 关键边界：空数组；左右端点；计算 mid 时避免边界更新不前进。
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
  console.log("🟡 2026-09-11 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
