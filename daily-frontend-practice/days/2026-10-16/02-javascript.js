"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `set`：按路径不可变地设置嵌套值，路径不存在时创建对象或数组。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `set`：按路径不可变地设置嵌套值，路径不存在时创建对象或数组。
 * 输入：原对象、路径 a.b[0].c 与待设置 value。
 * 输出：不可变更新后的新对象，路径不存在时创建对应对象/数组。
 * 具体例子：set({},"a.b[0].c",3) -> {a:{b:[{c:3}]}}。
 * 关键边界：原对象不变；数字下标创建数组；未修改分支可复用引用。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-16 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

