"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `useLatest` 的框架无关版本：用对象引用保存最新值，解释解决闭包旧值问题。
 *
 * 请补充：输入、输出、核心状态、边界与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-29 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

