"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：反转字符串中的单词：去除多余空格后反转单词顺序；不使用正则的一步到位答案。
 *
 * 中文解释（已给出）：这道题要你完成：反转字符串中的单词：去除多余空格后反转单词顺序；不使用正则的一步到位答案。
 * 输入：可能含首尾和连续空格的字符串 s。
 * 输出：单词顺序反转、单词内部不变且只有单个空格分隔的新字符串。
 * 具体例子："  hello   world  " -> "world hello"。
 * 关键边界：全是空格时返回空字符串；不要依赖一个正则直接完成全部处理。
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
  console.log("🟡 2026-09-07 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
