"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Promise.all`：保持输入顺序、空数组立即 resolve、任一 reject 立即 reject。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `Promise.all`：保持输入顺序、空数组立即 resolve、任一 reject 立即 reject。
 * 输入：可迭代的值或 Promise 列表。
 * 输出：一个 Promise；全部成功时按输入顺序 resolve 数组，任一失败立即 reject。
 * 具体例子：Promise.all 手写版接收 [delay("A",30),delay("B",10)]，仍输出 ["A","B"]。
 * 关键边界：空输入立即 resolve([])；普通值按已成功 Promise 处理。
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
  console.log("🟡 2026-09-12 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
