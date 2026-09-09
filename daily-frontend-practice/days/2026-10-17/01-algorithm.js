"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：实现 Trie：支持 insert/search/startsWith，说明节点 children 的结构。
 *
 * 中文解释（已给出）：这道题要你完成：实现 Trie：支持 insert/search/startsWith，说明节点 children 的结构。
 * 输入：insert/search/startsWith 的字符串操作序列。
 * 输出：search 判断完整单词，startsWith 判断前缀。
 * 具体例子：insert("apple") 后 search("apple")->true、search("app")->false、startsWith("app")->true。
 * 关键边界：空字符串规则要定义；节点需区分“路径存在”和“单词结束”。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-17 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

