"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `new`：创建对象、连接原型、执行构造器并正确处理显式对象返回值。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `new`：创建对象、连接原型、执行构造器并正确处理显式对象返回值。
 * 输入：构造函数 Constructor 与传给它的参数列表。
 * 输出：模拟 new 表达式创建出的实例，或构造器显式返回的对象。
 * 具体例子：myNew(Person,"Ada") -> 对象 name="Ada" 且 Object.getPrototypeOf(result)===Person.prototype。
 * 关键边界：构造器返回对象/函数时采用该返回值；返回原始值时仍采用新实例。
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
  console.log("🟡 2026-09-09 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
