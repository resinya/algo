"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：打家劫舍：相邻不能同时选择，返回最大金额；用滚动变量优化空间。
 *
 * 中文解释（已给出）：这道题要你完成：打家劫舍：相邻不能同时选择，返回最大金额；用滚动变量优化空间。
 * 输入：非负整数数组 nums，每项是某间房金额。
 * 输出：不能选择相邻房间时能取得的最大金额。
 * 具体例子：[2,7,9,3,1] -> 12，选择 2、9、1。
 * 关键边界：空数组返回 0；滚动变量分别表示“不偷当前”和“偷当前/当前最优”。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-23 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

