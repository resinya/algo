"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `useLatest` 的框架无关版本：用对象引用保存最新值，解释解决闭包旧值问题。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `useLatest` 的框架无关版本：用对象引用保存最新值，解释解决闭包旧值问题。
 * 输入：任意 value 和一个长期稳定的 ref 对象。
 * 输出：每次 update 后 ref.current 保存最新值，读取函数始终看到最新值。
 * 具体例子：ref.current 从 1 更新为 2；旧闭包读取 ref.current 时得到 2，而不是捕获的 1。
 * 关键边界：这是框架无关模型；更新对象引用本身会失去稳定性。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-29 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

