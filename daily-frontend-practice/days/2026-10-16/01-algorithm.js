"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：二叉树右视图：层序遍历取每层最后一个节点。
 *
 * 中文解释（已给出）：这道题要你完成：二叉树右视图：层序遍历取每层最后一个节点。
 * 输入：二叉树根节点 root。
 * 输出：从上到下看到的每层最右节点值数组。
 * 具体例子：树 [1,2,3,null,5,null,4] -> [1,3,4]。
 * 关键边界：空树返回 []；层序时取每层最后一个实际节点。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-16 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

