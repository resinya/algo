"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `once(fn)`：无论成功失败只执行一次，并说明异步函数的缓存策略。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `once(fn)`：无论成功失败只执行一次，并说明异步函数的缓存策略。
 * 输入：函数 fn 与多次调用参数。
 * 输出：只执行 fn 一次，之后复用第一次结果或 Promise。
 * 具体例子：once(x=>x*2)(3) -> 6，之后调用参数 10 仍返回 6。
 * 关键边界：第一次 throw/reject 后是否缓存失败必须明确；异步并发调用不能执行两次。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-05 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

