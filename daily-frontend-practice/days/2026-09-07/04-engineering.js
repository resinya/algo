"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：30 分钟模拟：从本周任选一题重写；先写状态注释，再实现，再自行设计 3 个边界测试。
 *
 * 中文解释（已给出）：这道题要你完成：30 分钟模拟：从本周任选一题重写；先写状态注释，再实现，再自行设计 3 个边界测试。
 * 输入：本周任一已做题的原始题目、30 分钟计时和自己设计的测试。
 * 输出：不看旧代码的实现、状态注释、至少 3 个边界测试和复盘。
 * 具体例子：选择 flat：提交实现，并测试空数组、depth=0、稀疏数组三类边界。
 * 关键边界：不得复制旧实现；超时也保留当前代码，用于定位真实卡点。
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
  console.log("🟡 2026-09-07 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
