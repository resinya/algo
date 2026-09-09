"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Promise.allSettled`：每项输出 fulfilled/rejected 状态和对应值。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `Promise.allSettled`：每项输出 fulfilled/rejected 状态和对应值。
 * 输入：值或 Promise 的可迭代列表。
 * 输出：Promise，始终成功为每项的 {status,value} 或 {status,reason}，顺序与输入一致。
 * 具体例子：[Promise.resolve(1),Promise.reject("x")] -> [{status:"fulfilled",value:1},{status:"rejected",reason:"x"}]。
 * 关键边界：空输入立即 resolve([])；单项失败不能让整体 reject。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-29 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

