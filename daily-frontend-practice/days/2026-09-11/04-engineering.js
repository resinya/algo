"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：可取消请求管理器：同一 key 的新请求启动时取消旧请求，最新结果才允许写入状态。
 *
 * 编码前请用中文补充：
 * 1. 输入与输出是什么？
 * 2. 维护哪些状态/数据结构？
 * 3. 至少一个边界是什么？
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-11 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
