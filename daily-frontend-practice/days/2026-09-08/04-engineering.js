"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：请求状态机：设计 idle/loading/success/error 四种状态与允许迁移，禁止非法迁移。
 *
 * 中文解释（已给出）：这道题要你完成：请求状态机：设计 idle/loading/success/error 四种状态与允许迁移，禁止非法迁移。
 * 输入：当前状态和 start/succeed/fail/reset 等事件。
 * 输出：合法迁移后的新状态；非法迁移返回错误或保持原状态，规则需统一。
 * 具体例子：idle + start -> loading；loading + succeed(data) -> success；success + succeed 属于非法迁移。
 * 关键边界：loading 才能 success/error；reset 可否从所有状态发生要写清。
 *
 * 编码前请先复述并画出关键状态：
 * 1. 用自己的话复述上面的输入与输出。
 * 2. 维护哪些状态/数据结构？
 * 3. 至少一个边界是什么？
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-08 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
