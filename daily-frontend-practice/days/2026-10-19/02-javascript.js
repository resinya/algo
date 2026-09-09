"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `classnames`：支持字符串、数组、对象条件值，忽略 falsy。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `classnames`：支持字符串、数组、对象条件值，忽略 falsy。
 * 输入：字符串、嵌套数组和 {className:boolean} 对象的任意组合。
 * 输出：以单空格连接的 class 字符串，忽略 falsy。
 * 具体例子：classnames("btn",["large",null],{active:true,disabled:false}) -> "btn large active"。
 * 关键边界：数组可嵌套；数字 0 是否忽略需与题目规则一致；不展开对象原型属性。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-19 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

