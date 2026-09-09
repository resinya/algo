"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `Array.prototype.reduce`：处理初始值存在/不存在、空数组无初始值时报错。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `Array.prototype.reduce`：处理初始值存在/不存在、空数组无初始值时报错。
 * 输入：数组、回调函数和可选初始值。
 * 输出：从左到右累计后的单个结果。
 * 具体例子：reduce([1,2,3],(sum,n)=>sum+n,0) -> 6；无初始值时从首项作为 accumulator 开始。
 * 关键边界：空数组且无初始值必须抛 TypeError；不能跳过回调参数 index/array。
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
  console.log("🟡 2026-09-19 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
