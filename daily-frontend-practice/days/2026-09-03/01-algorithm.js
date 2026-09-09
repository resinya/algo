"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：三数之和：返回和为 0 的不重复三元组；排序后使用双指针，跳过重复答案。
 *
 * 中文解释（已给出）：这道题要你完成：三数之和：返回和为 0 的不重复三元组；排序后使用双指针，跳过重复答案。
 * 输入：整数数组 nums。
 * 输出：所有和为 0 且数值组合不重复的三元组。
 * 具体例子：[-1,0,1,2,-1,-4] -> [[-1,-1,2],[-1,0,1]]。
 * 关键边界：少于 3 项返回 []；排序后要跳过重复基准值和重复双指针值。
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
  console.log("🟡 2026-09-03 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
