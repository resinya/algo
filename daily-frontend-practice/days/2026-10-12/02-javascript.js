"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `uniqBy`：按 key 或回调去重，保持第一次出现顺序。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `uniqBy`：按 key 或回调去重，保持第一次出现顺序。
 * 输入：数组 items 与属性名或 selector。
 * 输出：按键去重且保留第一次出现顺序的新数组。
 * 具体例子：uniqBy([{id:1,v:"a"},{id:1,v:"b"},{id:2}],"id") -> 保留第一项 id=1 和 id=2。
 * 关键边界：键为 undefined 也算同一组；不修改输入。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-12 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

