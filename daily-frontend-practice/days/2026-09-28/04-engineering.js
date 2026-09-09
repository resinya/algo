"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：复盘文档：写出本月最常漏的三个边界，以及它们各自对应的测试用例。
 *
 * 中文解释（已给出）：这道题要你完成：复盘文档：写出本月最常漏的三个边界，以及它们各自对应的测试用例。
 * 输入：本月代码、测试失败和评估记录。
 * 输出：三个最常遗漏边界，每项配一个可执行测试和改进动作。
 * 具体例子：遗漏“空数组”：记录 assert.deepEqual(flat([]),[])，并规定今后编码前先列空输入。
 * 关键边界：只记录有证据的问题；“我不熟”不算可验证边界。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-28 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

