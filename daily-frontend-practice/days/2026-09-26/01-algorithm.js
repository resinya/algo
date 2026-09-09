"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：子集：返回数组所有子集；解释回溯路径与选择/撤销选择。
 *
 * 中文解释（已给出）：这道题要你完成：子集：返回数组所有子集；解释回溯路径与选择/撤销选择。
 * 输入：元素互不相同的数组 nums。
 * 输出：包含所有子集的二维数组。
 * 具体例子：[1,2] -> [[],[1],[1,2],[2]]，顺序可以按回溯过程定义。
 * 关键边界：空数组返回 [[]]；每次记录 path 时必须复制，不能把同一数组引用反复加入结果。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-26 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

