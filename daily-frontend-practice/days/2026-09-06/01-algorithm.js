"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：无重复字符最长子串变式：返回最长子串本身及其起止下标；要求 `O(n)`。
 *
 * 中文解释（已给出）：这道题要你完成：无重复字符最长子串变式：返回最长子串本身及其起止下标；要求 `O(n)`。
 * 输入：字符串 s。
 * 输出：对象 {substring,start,end}，表示最长无重复连续子串及闭区间下标。
 * 具体例子："abba" -> {substring:"ab",start:0,end:1}；若并列，返回最早出现的一段。
 * 关键边界：空字符串返回 {substring:"",start:-1,end:-1}；左边界不能倒退。
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
  console.log("🟡 2026-09-06 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
