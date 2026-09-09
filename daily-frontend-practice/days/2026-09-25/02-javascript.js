"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Array.prototype.some/every`：支持提前退出。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `Array.prototype.some/every`：支持提前退出。
 * 输入：数组、predicate 和 some/every 模式。
 * 输出：some 在任一项满足时 true；every 在任一项不满足时 false，并立即停止。
 * 具体例子：some([1,3,4],n=>n%2===0) -> true，访问到 4 后不再继续；every([],fn) -> true。
 * 关键边界：稀疏空位跳过；回调参数与 thisArg 规则和原生一致。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-25 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

