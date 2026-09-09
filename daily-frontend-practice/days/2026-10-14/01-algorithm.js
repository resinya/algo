"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：0/1 背包：给定重量价值和容量，求最大价值；明确倒序遍历原因。
 *
 * 中文解释（已给出）：这道题要你完成：0/1 背包：给定重量价值和容量，求最大价值；明确倒序遍历原因。
 * 输入：weights、values 与背包容量 capacity，每件物品最多一次。
 * 输出：不超过容量的最大总价值。
 * 具体例子：weights=[1,3,4], values=[15,20,30], capacity=4 -> 35。
 * 关键边界：一维 DP 必须倒序遍历容量，防止同件物品被重复使用。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-14 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

