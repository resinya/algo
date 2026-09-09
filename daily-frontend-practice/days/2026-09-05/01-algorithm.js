"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：有效的括号变式：除判断有效外，返回第一个错误位置；无错误返回 `-1`。
 *
 * 中文解释（已给出）：这道题要你完成：有效的括号变式：除判断有效外，返回第一个错误位置；无错误返回 `-1`。
 * 输入：只含括号字符的字符串 s。
 * 输出：第一个不合法字符的下标；完全合法返回 -1。
 * 具体例子："([)]" -> 2，因为下标 2 的 ) 不能匹配当前栈顶 [。
 * 关键边界：遍历结束仍有左括号时，要定义并返回第一个未匹配左括号的位置。
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
  console.log("🟡 2026-09-05 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
