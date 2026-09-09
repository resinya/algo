"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Promise.prototype.finally` 行为：无论成功失败都执行回调，并保持原结果或原错误。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `Promise.prototype.finally` 行为：无论成功失败都执行回调，并保持原结果或原错误。
 * 输入：原 Promise 与 onFinally 回调。
 * 输出：新 Promise；回调执行后保留原成功值或原失败原因。
 * 具体例子：Promise.resolve(1).finally(()=>2) 仍 resolve 1；finally 抛 Error("x") 则改为 reject x。
 * 关键边界：回调返回 Promise 时要等待；回调本身无参数。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
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

