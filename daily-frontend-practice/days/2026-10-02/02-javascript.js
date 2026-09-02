"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Promise.prototype.finally` 行为：无论成功失败都执行回调，并保持原结果或原错误。
 *
 * 请补充：输入、输出、核心状态、边界与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-02 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

