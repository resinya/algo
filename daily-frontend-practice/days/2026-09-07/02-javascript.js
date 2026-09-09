"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：`Object.is` 模拟：正确区分 `NaN` 与 `+0/-0`。
 *
 * 中文解释（已给出）：这道题要你完成：`Object.is` 模拟：正确区分 `NaN` 与 `+0/-0`。
 * 输入：任意两个 JavaScript 值 x、y。
 * 输出：与 Object.is(x,y) 一致的布尔值。
 * 具体例子：objectIs(NaN,NaN) -> true；objectIs(+0,-0) -> false；objectIs(1,1) -> true。
 * 关键边界：对象只按引用比较；重点区分 NaN 与正负零。
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
  console.log("🟡 2026-09-07 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
