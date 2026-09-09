"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：`compose`：实现从右到左组合函数；进阶兼容 Promise 返回值。
 *
 * 中文解释（已给出）：这道题要你完成：`compose`：实现从右到左组合函数；进阶兼容 Promise 返回值。
 * 输入：若干一元函数，从右到左组合。
 * 输出：一个新函数，其输出依次经过最右函数到最左函数。
 * 具体例子：compose(x=>x*2,x=>x+1)(3) -> 8，先 3+1，再乘 2。
 * 关键边界：零个函数时可返回恒等函数；进阶遇到 Promise 时后续函数必须等待。
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
  console.log("🟡 2026-09-20 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
