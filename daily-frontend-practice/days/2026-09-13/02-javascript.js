"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Promise.race`：第一个 settled 的结果决定返回 Promise；解释空数组行为。
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
  console.log("🟡 2026-09-13 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
