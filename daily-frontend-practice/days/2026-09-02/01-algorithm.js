"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：两数之和变式：返回所有不重复的数值对下标；同一元素不能重复使用，目标 `O(n)`。
 *
 * 中文解释（已给出）：这道题要你完成：两数之和变式：返回所有不重复的数值对下标；同一元素不能重复使用，目标 `O(n)`。
 * 输入：nums 数组与 target 数字。
 * 输出：所有满足和为 target 的不重复下标对；没有答案返回空数组。
 * 具体例子：nums=[2,7,11,15], target=9 -> [[0,1]]，因为 nums[0]+nums[1]=9。
 * 关键边界：同一元素不能使用两次；结果中的同一组下标不能重复。
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
  console.log("🟡 2026-09-02 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
