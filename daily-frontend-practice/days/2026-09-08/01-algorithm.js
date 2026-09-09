"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：反转单链表：迭代实现，返回新头结点；画出 `prev/current/next` 的变化。
 *
 * 中文解释（已给出）：这道题要你完成：反转单链表：迭代实现，返回新头结点；画出 `prev/current/next` 的变化。
 * 输入：单链表头结点 head，节点结构为 {value,next}。
 * 输出：反转后的新头结点，节点本身复用。
 * 具体例子：1->2->3->null -> 3->2->1->null。
 * 关键边界：head=null 返回 null；改 current.next 前必须先保存 next。
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
  console.log("🟡 2026-09-08 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
