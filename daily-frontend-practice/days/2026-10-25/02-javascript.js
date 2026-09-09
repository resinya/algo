"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写断言工具：实现 equal、deepEqual 的基础版本，并输出可读失败信息。
 *
 * 中文解释（已给出）：这道题要你完成：手写断言工具：实现 equal、deepEqual 的基础版本，并输出可读失败信息。
 * 输入：actual、expected 和可选错误消息。
 * 输出：相等时无返回/true；不等时抛含可读差异的 AssertionError。
 * 具体例子：equal(1,2) 报 expected 2 but received 1；deepEqual({a:[1]},{a:[1]}) 通过。
 * 关键边界：NaN、+0/-0、循环引用和支持类型范围要明确。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-25 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

