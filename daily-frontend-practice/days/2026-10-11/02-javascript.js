"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `chunk`：按 size 切分数组；非法 size 抛 RangeError。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `chunk`：按 size 切分数组；非法 size 抛 RangeError。
 * 输入：数组 array 与正整数 size。
 * 输出：按 size 切分的二维新数组。
 * 具体例子：chunk([1,2,3,4,5],2) -> [[1,2],[3,4],[5]]。
 * 关键边界：空数组返回 []；size<=0 或非整数抛 RangeError。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-11 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

