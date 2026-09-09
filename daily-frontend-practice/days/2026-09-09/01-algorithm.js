"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：合并两个有序链表：复用已有节点，不新建业务节点；处理任一链表为空。
 *
 * 中文解释（已给出）：这道题要你完成：合并两个有序链表：复用已有节点，不新建业务节点；处理任一链表为空。
 * 输入：两个按升序排列的链表头结点 list1、list2。
 * 输出：合并后的有序链表头结点，复用输入节点。
 * 具体例子：1->2->4 与 1->3->4 -> 1->1->2->3->4->4。
 * 关键边界：任一链表为空时直接返回另一个；不要新建承载业务值的节点。
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
  console.log("🟡 2026-09-09 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
