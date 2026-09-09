"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `get`：按 `'a.b[0].c'` 路径安全读取对象，支持默认值。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `get`：按 `'a.b[0].c'` 路径安全读取对象，支持默认值。
 * 输入：对象 object、路径字符串如 a.b[0].c 与 defaultValue。
 * 输出：路径存在时的值；任何一段缺失时返回默认值。
 * 具体例子：get({a:{b:[{c:3}]}},"a.b[0].c",0) -> 3；缺失路径 -> 0。
 * 关键边界：值为 0/false/null 时不能误判为缺失；路径解析要限制范围。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-15 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

