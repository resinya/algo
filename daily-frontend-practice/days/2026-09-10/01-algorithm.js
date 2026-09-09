"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：环形链表：用快慢指针判断是否有环；进阶返回入环节点。
 *
 * 中文解释（已给出）：这道题要你完成：环形链表：用快慢指针判断是否有环；进阶返回入环节点。
 * 输入：单链表头结点 head。
 * 输出：无环返回 null；有环时返回入环节点，若只做基础版可先返回布尔值。
 * 具体例子：1->2->3->4 且 4.next=2 -> 入环节点是值 2 的节点。
 * 关键边界：空链表或单节点无环返回 null；比较节点引用而不是节点值。
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
  console.log("🟡 2026-09-10 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
