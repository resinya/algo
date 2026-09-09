"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `sortBy`：按多个字段稳定排序，支持 asc/desc 与空值放末尾。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `sortBy`：按多个字段稳定排序，支持 asc/desc 与空值放末尾。
 * 输入：对象数组、多个 {key,direction} 排序规则。
 * 输出：稳定排序后的新数组，空值放最后。
 * 具体例子：按 dept asc、salary desc：同部门中工资高者在前；所有规则相同则保持原顺序。
 * 关键边界：不修改输入；字符串、数字与 null 的比较规则明确。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-08 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

