"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Array.prototype.map`：保留稀疏数组空位语义。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `Array.prototype.map`：保留稀疏数组空位语义。
 * 输入：数组 array、mapper 和可选 thisArg。
 * 输出：长度相同的新数组；已有元素被映射，稀疏空位仍为空位。
 * 具体例子：[1,,3].map(x=>x*2) 的手写结果为 [2,,6]，下标 1 仍不存在。
 * 关键边界：不修改原数组；回调接收 value/index/array。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-23 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

