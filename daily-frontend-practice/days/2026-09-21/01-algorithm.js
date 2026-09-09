"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：列表转树变式：父节点缺失时将节点收集到 `orphans`，保持原输入不变。
 *
 * 中文解释（已给出）：这道题要你完成：列表转树变式：父节点缺失时将节点收集到 `orphans`，保持原输入不变。
 * 输入：含 id/parentId 的扁平列表与根 parentId。
 * 输出：对象 {tree,orphans}；正常节点组成树，父节点缺失的节点进入 orphans。
 * 具体例子：[{id:1,parentId:null},{id:2,parentId:99}] -> tree 含节点 1，orphans 含节点 2。
 * 关键边界：输入顺序任意；不能修改原节点；孤儿的后代归属规则要说明。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-21 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

