"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：为 Todo reducer 写测试：覆盖新增、删除、切换、空列表和未知 action。
 *
 * 中文解释（已给出）：这道题要你完成：为 Todo reducer 写测试：覆盖新增、删除、切换、空列表和未知 action。
 * 输入：Todo reducer、初始 state 与 action。
 * 输出：覆盖新增、删除、切换、空列表、未知 action 的断言。
 * 具体例子：reducer([], {type:"add",todo:{id:1}}) -> [{id:1}]，并断言原 state 未改变。
 * 关键边界：重复 id、找不到 id 和未知 action 应有明确行为。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-25 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

