"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：两数之和变式：返回所有不重复的数值对下标；同一元素不能重复使用，目标 `O(n)`。
 *
 * 编码前请用中文补充：
 * 1. 输入与输出是什么？
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
