"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Promise.any`：第一个成功即 resolve，全部失败时 reject AggregateError。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `Promise.any`：第一个成功即 resolve，全部失败时 reject AggregateError。
 * 输入：值或 Promise 的可迭代列表。
 * 输出：第一个 fulfilled 值；若全部 rejected，则 reject AggregateError，errors 按输入顺序。
 * 具体例子：[reject("A"),resolve("B")] -> resolve("B")；两个都失败 -> AggregateError(["A","B"])。
 * 关键边界：空输入应立即以 AggregateError 拒绝；普通值视为已成功。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-30 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

