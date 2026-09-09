"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：最长公共子序列：返回长度；清楚区分子序列与子串。
 *
 * 中文解释（已给出）：这道题要你完成：最长公共子序列：返回长度；清楚区分子序列与子串。
 * 输入：字符串 text1、text2。
 * 输出：最长公共子序列长度。
 * 具体例子："abcde" 与 "ace" -> 3，对应子序列 "ace"。
 * 关键边界：子序列可不连续；任一字符串为空返回 0。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-10 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

