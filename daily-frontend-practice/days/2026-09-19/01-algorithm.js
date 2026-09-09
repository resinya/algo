"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：最近公共祖先：普通二叉树中找两个节点的最近公共祖先。
 *
 * 中文解释（已给出）：这道题要你完成：最近公共祖先：普通二叉树中找两个节点的最近公共祖先。
 * 输入：二叉树根节点 root 与树中的节点 p、q。
 * 输出：p、q 的最近公共祖先节点。
 * 具体例子：根 3 的左子树含 5、右子树含 1，p=5、q=1 -> 返回节点 3。
 * 关键边界：一个节点是另一个祖先时返回该祖先；比较节点引用。
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
  console.log("🟡 2026-09-19 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
