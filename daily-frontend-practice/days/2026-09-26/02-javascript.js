"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写观察者模式：被观察对象状态变化时通知多个订阅者；支持解除订阅。
 *
 * 中文解释（已给出）：这道题要你完成：手写观察者模式：被观察对象状态变化时通知多个订阅者；支持解除订阅。
 * 输入：可观察对象、初始状态和多个 observer 回调。
 * 输出：setState 后通知订阅者；unsubscribe 后不再收到通知。
 * 具体例子：observerA/observerB 订阅后 setState(1) 两者都收到 1；解除 A 后 setState(2) 只有 B 收到。
 * 关键边界：通知过程中解除/新增订阅不应破坏本轮遍历；避免残留引用。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-26 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

