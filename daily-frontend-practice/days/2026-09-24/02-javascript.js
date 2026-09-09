"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：LRU 缓存：用 Map 实现 get/put，访问后更新为最新，容量满时淘汰最旧。
 *
 * 中文解释（已给出）：这道题要你完成：LRU 缓存：用 Map 实现 get/put，访问后更新为最新，容量满时淘汰最旧。
 * 输入：正整数容量 capacity，以及 get(key)/put(key,value) 操作。
 * 输出：get 返回值或 -1；访问与写入都会把 key 标记为最新，超容量淘汰最旧。
 * 具体例子：capacity=2；put(a,1),put(b,2),get(a),put(c,3) 后 b 被淘汰，get(b)->-1。
 * 关键边界：更新已有 key 不增加容量；capacity 非正整数应拒绝。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-24 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

