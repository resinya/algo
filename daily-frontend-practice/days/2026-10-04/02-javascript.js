"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `sleep(ms)` 与超时包装：超时后 reject，不让晚到结果覆盖当前状态。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `sleep(ms)` 与超时包装：超时后 reject，不让晚到结果覆盖当前状态。
 * 输入：等待毫秒 ms；异步任务 promise 与超时毫秒 timeout。
 * 输出：sleep 返回延迟完成 Promise；超时包装在期限内返回原值，否则 reject。
 * 具体例子：withTimeout(delayResolve("ok",20),50) -> "ok"；原任务 100ms 则约 50ms reject TimeoutError。
 * 关键边界：清理定时器；晚到结果不能覆盖超时后的业务状态。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-04 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

