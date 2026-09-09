"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：二叉树最大深度：递归实现，并写出空树结果。
 *
 * 中文解释（已给出）：这道题要你完成：二叉树最大深度：递归实现，并写出空树结果。
 * 输入：二叉树根节点 root。
 * 输出：从根到最深叶子的节点层数。
 * 具体例子：单节点树 -> 1；根左右子树深度为 2 和 3 -> 整棵树深度 4。
 * 关键边界：空树返回 0；递归式是 1 + max(左深度,右深度)。
 *
 * 编码前请先复述并画出关键状态：
 * 1. 用自己的话复述上面的输入与输出。
 * 2. 维护哪些状态/数据结构？
 * 3. 至少一个边界是什么？
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-17 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
