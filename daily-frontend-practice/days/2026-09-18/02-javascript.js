"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：`Map` 与普通对象选择：实现一个键值缓存，支持任意对象键，并说明为何选 Map。
 *
 * 中文解释（已给出）：这道题要你完成：`Map` 与普通对象选择：实现一个键值缓存，支持任意对象键，并说明为何选 Map。
 * 输入：任意类型的 key、value 和 get/set/delete 操作。
 * 输出：能以对象本身作为 key 的缓存结果。
 * 具体例子：const key={id:1}; cache.set(key,"data"); cache.get(key) -> "data"，而另一个 {id:1} 查不到。
 * 关键边界：对象会把键字符串化而冲突；Map 按 SameValueZero 和引用身份区分键。
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
  console.log("🟡 2026-09-18 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
