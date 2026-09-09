"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：二分边界：分别实现第一个大于等于 target 与最后一个小于等于 target 的位置。
 *
 * 中文解释（已给出）：这道题要你完成：二分边界：分别实现第一个大于等于 target 与最后一个小于等于 target 的位置。
 * 输入：升序数组 nums 与 target。
 * 输出：lowerBound 返回第一个 >= target 的下标；upperFloor 返回最后一个 <= target 的下标，不存在返回 -1。
 * 具体例子：[1,2,2,4], target=2 -> lowerBound=1、upperFloor=2。
 * 关键边界：target 小于全部或大于全部元素；区间采用闭区间还是左闭右开必须一致。
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
  console.log("🟡 2026-09-14 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
