"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：前 K 个高频元素：统计频次后用桶或堆返回前 k 个；处理频次相同时的规则。
 *
 * 中文解释（已给出）：这道题要你完成：前 K 个高频元素：统计频次后用桶或堆返回前 k 个；处理频次相同时的规则。
 * 输入：整数数组 nums 与 k。
 * 输出：出现频率最高的 k 个元素；并列规则需固定。
 * 具体例子：[1,1,1,2,2,3], k=2 -> [1,2]。
 * 关键边界：k 等于不同元素数；频次相同按首次位置或数值排序并写清。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-04 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

