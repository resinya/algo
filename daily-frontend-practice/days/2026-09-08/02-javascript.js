"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：深拷贝基础：支持普通对象、数组、Date、RegExp 与循环引用；用 `WeakMap` 保留共享引用关系。
 *
 * 中文解释（已给出）：这道题要你完成：深拷贝基础：支持普通对象、数组、Date、RegExp 与循环引用；用 `WeakMap` 保留共享引用关系。
 * 输入：普通对象、数组、Date、RegExp 或含循环/共享引用的值。
 * 输出：结构相同的深拷贝；支持的引用值是新对象，内部共享关系保留。
 * 具体例子：source.self=source，clone 后 copy!==source 且 copy.self===copy。
 * 关键边界：WeakMap 必须在递归子属性之前登记副本，否则循环引用会无限递归。
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
  console.log("🟡 2026-09-08 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
