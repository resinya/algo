"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 mock timer 设计：描述如何抽象 now、setTimeout、clearTimeout 以便测试。
 *
 * 中文解释（已给出）：这道题要你完成：手写 mock timer 设计：描述如何抽象 now、setTimeout、clearTimeout 以便测试。
 * 输入：待测逻辑与注入的 now/setTimeout/clearTimeout 接口。
 * 输出：可手动推进时间并确定执行顺序的 fake timer 设计。
 * 具体例子：schedule(fn,100)，advanceBy(99) 不执行，advanceBy(1) 执行一次。
 * 关键边界：相同触发时间顺序、取消、回调中新建 timer 和无限循环保护。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-26 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

