"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：矩阵置零：`O(1)` 额外空间，使用首行首列做标记。
 *
 * 中文解释（已给出）：这道题要你完成：矩阵置零：`O(1)` 额外空间，使用首行首列做标记。
 * 输入：m x n 矩阵 matrix。
 * 输出：若某元素为 0，则其整行整列置 0；原地完成且额外空间 O(1)。
 * 具体例子：[[1,1,1],[1,0,1],[1,1,1]] -> [[1,0,1],[0,0,0],[1,0,1]]。
 * 关键边界：首行首列需要独立标记，避免标记阶段丢失原始信息。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-27 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

