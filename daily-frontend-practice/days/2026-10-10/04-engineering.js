"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：列表 key 检查器：给定旧新列表，识别重复 key、缺失 key、疑似 index key。
 *
 * 中文解释（已给出）：这道题要你完成：列表 key 检查器：给定旧新列表，识别重复 key、缺失 key、疑似 index key。
 * 输入：旧新列表，每项可有 key 与原下标。
 * 输出：重复 key、缺失 key、疑似 index key 的诊断数组。
 * 具体例子：items=[{key:"a"},{key:"a"},{}] -> 报告 duplicate:a 与 missing:2。
 * 关键边界：数字 key 不一定就是 index；需结合 key===index 和列表变化判断“疑似”。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-10 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

