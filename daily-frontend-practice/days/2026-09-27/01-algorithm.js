"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：岛屿数量：DFS/BFS 统计网格中的岛屿数；不得越界，明确是否修改网格。
 *
 * 中文解释（已给出）：这道题要你完成：岛屿数量：DFS/BFS 统计网格中的岛屿数；不得越界，明确是否修改网格。
 * 输入：由 "1" 陆地和 "0" 水组成的二维网格。
 * 输出：上下左右连通的岛屿数量。
 * 具体例子：[["1","1","0"],["0","1","0"],["1","0","1"]] -> 3。
 * 关键边界：空网格返回 0；访问邻居前检查边界；是否修改原网格要明确。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-27 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

