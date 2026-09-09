"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：代码审查：为一个“请求全部同时发出”的伪并发池列出三个可观测错误。
 *
 * 中文解释（已给出）：这道题要你完成：代码审查：为一个“请求全部同时发出”的伪并发池列出三个可观测错误。
 * 输入：一段 while 循环直接调用所有 task() 的伪并发池代码。
 * 输出：至少三个可通过日志/测试观察到的错误。
 * 具体例子：记录 running 峰值会等于 tasks.length；结果下标可能错；reject 后仍有新任务已启动。
 * 关键边界：每个问题都配可复现测试，不能只写“逻辑不对”。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-07 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

