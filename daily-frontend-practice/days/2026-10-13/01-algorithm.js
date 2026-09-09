"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：俄罗斯套娃信封：排序后转化为 LIS；解释为何高度要逆序排序。
 *
 * 中文解释（已给出）：这道题要你完成：俄罗斯套娃信封：排序后转化为 LIS；解释为何高度要逆序排序。
 * 输入：信封数组 envelopes，每项 [width,height]。
 * 输出：最多能嵌套的信封数量。
 * 具体例子：[[5,4],[6,4],[6,7],[2,3]] -> 3，对应 [2,3]->[5,4]->[6,7]。
 * 关键边界：宽度相同时高度逆序，防止相同宽度被 LIS 错选。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-13 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

