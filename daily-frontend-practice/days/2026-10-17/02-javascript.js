"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写模板插值：替换 `{{ user.name }}`，缺失路径显示空字符串并防止执行任意表达式。
 *
 * 中文解释（已给出）：这道题要你完成：手写模板插值：替换 `{{ user.name }}`，缺失路径显示空字符串并防止执行任意表达式。
 * 输入：模板字符串与只读数据对象。
 * 输出：替换 {{ path }} 后的字符串；缺失路径替换为空串。
 * 具体例子：render("Hi {{ user.name }}!",{user:{name:"Ada"}}) -> "Hi Ada!"。
 * 关键边界：只解析安全属性路径，不能 eval；原型链危险键要拒绝。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-17 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

