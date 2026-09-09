"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写简单模板渲染：支持文本、变量、条件块的受限 DSL，不执行用户 JS。
 *
 * 中文解释（已给出）：这道题要你完成：手写简单模板渲染：支持文本、变量、条件块的受限 DSL，不执行用户 JS。
 * 输入：受限模板文本、数据和允许的变量/条件语法。
 * 输出：安全渲染字符串，不执行任意 JavaScript。
 * 具体例子：模板 "{{#if vip}}VIP {{name}}{{/if}}" 与 {vip:true,name:"Ada"} -> "VIP Ada"。
 * 关键边界：缺失变量、嵌套条件和 HTML 转义规则要明确；禁止 eval/new Function。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-18 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

