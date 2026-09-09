"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：二叉树前序遍历：递归与迭代各写一版，返回节点值数组。
 *
 * 中文解释（已给出）：这道题要你完成：二叉树前序遍历：递归与迭代各写一版，返回节点值数组。
 * 输入：二叉树根节点 root，节点含 value/left/right。
 * 输出：前序值数组，顺序为根、左、右；分别写递归和迭代版。
 * 具体例子：树 1，左 2，右 3 -> [1,2,3]。
 * 关键边界：空树返回 []；迭代栈中先压右节点再压左节点。
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
  console.log("🟡 2026-09-15 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
