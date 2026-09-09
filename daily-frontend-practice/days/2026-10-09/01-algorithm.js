"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：编辑距离：定义 dp[i][j] 含义，处理插入、删除、替换。
 *
 * 中文解释（已给出）：这道题要你完成：编辑距离：定义 dp[i][j] 含义，处理插入、删除、替换。
 * 输入：字符串 word1、word2。
 * 输出：通过插入、删除、替换把 word1 变成 word2 的最少操作数。
 * 具体例子："horse" -> "ros" 的编辑距离是 3。
 * 关键边界：空字符串与另一字符串的距离是其长度；清楚定义 dp[i][j]。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-09 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

