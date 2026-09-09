"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `JSON.stringify` 子集：支持 null、布尔、数字、字符串、数组、普通对象；循环引用抛错。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `JSON.stringify` 子集：支持 null、布尔、数字、字符串、数组、普通对象；循环引用抛错。
 * 输入：null、布尔、有限数字、字符串、数组或普通对象。
 * 输出：符合本题子集规则的 JSON 字符串。
 * 具体例子：{name:"Ada",active:true} -> "{\"name\":\"Ada\",\"active\":true}"。
 * 关键边界：循环引用抛 TypeError；数组中不支持值与对象属性中的不支持值规则要明确。
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
  console.log("🟡 2026-09-16 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
