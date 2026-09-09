"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Array.prototype.filter`：不修改原数组，回调接收 value/index/array。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `Array.prototype.filter`：不修改原数组，回调接收 value/index/array。
 * 输入：数组 array、predicate 和可选 thisArg。
 * 输出：包含所有 predicate 返回 truthy 元素的新数组。
 * 具体例子：filter([1,2,3],(value,index)=>value>index) -> [1,2,3]；回调接收 value/index/array。
 * 关键边界：不修改原数组；稀疏数组空位不调用回调。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-22 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

