"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：岛屿数量变式：返回每座岛面积最大值；选择 DFS 或 BFS 并说明空间差异。
 *
 * 中文解释（已给出）：这道题要你完成：岛屿数量变式：返回每座岛面积最大值；选择 DFS 或 BFS 并说明空间差异。
 * 输入：由 0/1 组成的网格。
 * 输出：所有岛屿中的最大面积；没有陆地返回 0。
 * 具体例子：[[1,1,0],[1,0,0],[0,1,1]] -> 3。
 * 关键边界：边界检查；是否修改网格；DFS 深度过大时可改 BFS。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-22 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

