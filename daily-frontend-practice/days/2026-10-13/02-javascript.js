"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `pick/omit`：仅复制自有可枚举属性，保持输入对象不变。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `pick/omit`：仅复制自有可枚举属性，保持输入对象不变。
 * 输入：源对象 object 与属性键列表 keys。
 * 输出：pick 返回只含 keys 的新对象；omit 返回排除 keys 的新对象。
 * 具体例子：pick({a:1,b:2},["a"]) -> {a:1}；omit 同输入 -> {b:2}。
 * 关键边界：只处理自有可枚举属性；特殊键和 Symbol 是否支持要明确。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-13 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

