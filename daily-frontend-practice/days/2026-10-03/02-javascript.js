"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写异步 `retry`：支持最大次数、固定/指数间隔、成功即停止、最后一次错误透传。
 *
 * 中文解释（已给出）：这道题要你完成：手写异步 `retry`：支持最大次数、固定/指数间隔、成功即停止、最后一次错误透传。
 * 输入：异步任务 task、最大尝试次数、间隔策略。
 * 输出：首次成功值；全失败时透传最后一次错误。
 * 具体例子：task 前两次 reject、第三次 resolve("ok")，maxAttempts=3 -> "ok"，共调用 3 次。
 * 关键边界：次数含首次调用；等待可固定或指数；成功后不能再重试。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-03 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

