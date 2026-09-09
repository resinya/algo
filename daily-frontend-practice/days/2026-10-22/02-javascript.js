"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写查询字符串 stringify：支持数组重复 key、null/undefined 规则与编码。
 *
 * 中文解释（已给出）：这道题要你完成：手写查询字符串 stringify：支持数组重复 key、null/undefined 规则与编码。
 * 输入：查询参数对象及 null/undefined、数组的编码规则。
 * 输出：编码后的查询字符串。
 * 具体例子：{tag:["js","ts"],empty:null,skip:undefined} -> "tag=js&tag=ts&empty="，undefined 被忽略。
 * 关键边界：键和值都需 encodeURIComponent；空数组、空键和属性顺序规则。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-22 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

