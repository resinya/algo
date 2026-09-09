"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：`groupBy + sortBy` 组合题：按部门分组后按薪资降序，每组保持稳定规则。
 *
 * 中文解释（已给出）：这道题要你完成：`groupBy + sortBy` 组合题：按部门分组后按薪资降序，每组保持稳定规则。
 * 输入：员工数组，含 department、salary 和原顺序。
 * 输出：按部门分组，每组工资降序且相同工资保持稳定。
 * 具体例子：A 部门工资 [10(id1),20(id2),20(id3)] -> [id2,id3,id1]。
 * 关键边界：空部门/空值规则明确；groupBy 安全键；不修改输入。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-14 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

