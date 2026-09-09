"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：课程表 II：返回一条合法学习顺序；无解返回空数组。
 *
 * 中文解释（已给出）：这道题要你完成：课程表 II：返回一条合法学习顺序；无解返回空数组。
 * 输入：课程数与先修关系数组。
 * 输出：一条满足全部依赖的课程顺序；有环返回 []。
 * 具体例子：numCourses=4, [[1,0],[2,0],[3,1],[3,2]] -> [0,1,2,3] 或 [0,2,1,3]。
 * 关键边界：可能存在多种正确顺序；结果长度不足 numCourses 说明有环。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-02 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

