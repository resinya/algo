"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `bind`：实现预置参数、调用时参数追加，并处理作为构造函数调用的场景。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `bind`：实现预置参数、调用时参数追加，并处理作为构造函数调用的场景。
 * 输入：函数 fn、绑定对象 thisArg、预置参数和调用时参数。
 * 输出：绑定后的函数；普通调用和 new 调用都符合 bind 行为。
 * 具体例子：bind(add,{base:1},2)(3) -> 6；new Bound("Ada") 创建的对象仍应继承原构造器原型。
 * 关键边界：作为构造函数调用时忽略 thisArg；参数顺序是预置参数在前。
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
  console.log("🟡 2026-09-05 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
