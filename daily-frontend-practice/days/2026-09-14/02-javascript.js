"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：Promise 并发池：最多同时执行 `limit` 个任务，按输入顺序返回结果，失败后停止领取新任务。
 *
 * 中文解释（已给出）：这道题要你完成：Promise 并发池：最多同时执行 `limit` 个任务，按输入顺序返回结果，失败后停止领取新任务。
 * 输入：返回 Promise 的任务函数数组 tasks 与正整数 limit。
 * 输出：Promise；并发不超限，结果按输入顺序，失败时拒绝并停止领取新任务。
 * 具体例子：A=30ms、B=10ms、C=20ms、limit=2 -> 完成顺序 B、A、C，但输出 [A,B,C]。
 * 关键边界：空任务；非法 limit；同步抛错任务；reject 后已运行任务可结束但不再启动新任务。
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
  console.log("🟡 2026-09-14 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
