"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写发布订阅与中间件：实现 `use(middleware)` 的洋葱模型最小版本。
 *
 * 中文解释（已给出）：这道题要你完成：手写发布订阅与中间件：实现 `use(middleware)` 的洋葱模型最小版本。
 * 输入：中间件函数列表和最终 context。
 * 输出：按洋葱模型进入与退出的执行顺序。
 * 具体例子：A 前、await next、A 后；B 同理 -> 顺序 A前、B前、B后、A后。
 * 关键边界：next 不能重复调用；同步/异步错误都要传播。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-24 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

