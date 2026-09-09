"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：请求重试器：仅对可重试错误指数退避，限制最大次数，并允许取消。
 *
 * 中文解释（已给出）：这道题要你完成：请求重试器：仅对可重试错误指数退避，限制最大次数，并允许取消。
 * 输入：异步任务 task、最大重试次数、退避参数和 AbortSignal。
 * 输出：最终成功值或最后错误，并记录每次尝试时间；取消后立即停止。
 * 具体例子：任务前两次返回 503、第三次成功，base=100ms -> 约等待 100ms、200ms 后成功。
 * 关键边界：400 等不可重试错误立即失败；等待退避期间也必须响应取消。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-29 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

