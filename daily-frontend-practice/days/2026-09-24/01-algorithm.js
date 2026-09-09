"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：零钱兑换：给定硬币和金额，返回最少硬币数；无解返回 `-1`。
 *
 * 中文解释（已给出）：这道题要你完成：零钱兑换：给定硬币和金额，返回最少硬币数；无解返回 `-1`。
 * 输入：硬币面额数组 coins 与非负金额 amount。
 * 输出：凑成 amount 的最少硬币数；无法凑成返回 -1。
 * 具体例子：coins=[1,2,5], amount=11 -> 3，组合为 5+5+1。
 * 关键边界：amount=0 返回 0；硬币可重复使用；无解状态不能参与转移。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-24 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

