"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：`Object.create` 模拟：以指定对象为原型创建新对象，并说明原型查找规则。
 *
 * 中文解释（已给出）：这道题要你完成：`Object.create` 模拟：以指定对象为原型创建新对象，并说明原型查找规则。
 * 输入：作为新对象原型的 proto；可选属性描述符。
 * 输出：一个自身为空、原型指向 proto 的新对象。
 * 具体例子：proto={greet(){return "hi"}}，obj=objectCreate(proto) 后 obj.greet() -> "hi" 且 proto 是 obj 的原型。
 * 关键边界：proto 必须是对象或 null；属性查找先自身再沿原型链。
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
  console.log("🟡 2026-09-15 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
