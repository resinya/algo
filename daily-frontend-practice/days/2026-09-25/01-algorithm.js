"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：全排列：回溯生成所有排列；数组含重复数字时去重。
 *
 * 中文解释（已给出）：这道题要你完成：全排列：回溯生成所有排列；数组含重复数字时去重。
 * 输入：可能含重复数字的数组 nums。
 * 输出：所有不重复排列组成的二维数组。
 * 具体例子：[1,1,2] -> [[1,1,2],[1,2,1],[2,1,1]]。
 * 关键边界：空数组通常返回 [[]]；同一层跳过相同值，但不同位置仍可使用。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-25 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

