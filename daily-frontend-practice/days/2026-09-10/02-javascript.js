"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `instanceof`：沿原型链查找，处理基本类型左值。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `instanceof`：沿原型链查找，处理基本类型左值。
 * 输入：任意左值 value 与右侧构造函数 Constructor。
 * 输出：value 的原型链是否包含 Constructor.prototype 的布尔值。
 * 具体例子：myInstanceof([],Array) -> true；myInstanceof({},Array) -> false。
 * 关键边界：左值为 null 或原始值返回 false；右值不可调用时应抛 TypeError。
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
  console.log("🟡 2026-09-10 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
