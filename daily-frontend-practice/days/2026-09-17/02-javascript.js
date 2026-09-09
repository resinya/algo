"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `JSON.parse` 使用边界：实现安全解析包装函数，支持默认值与错误回调。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `JSON.parse` 使用边界：实现安全解析包装函数，支持默认值与错误回调。
 * 输入：JSON 字符串、解析失败默认值和可选 onError 回调。
 * 输出：成功时返回解析值；失败时调用 onError 并返回默认值。
 * 具体例子：safeParse("{bad", {}, err=>logs.push(err)) -> {} 且 logs 新增一个 SyntaxError。
 * 关键边界：合法 JSON "null" 应返回 null，不能因 falsy 错用默认值。
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
  console.log("🟡 2026-09-17 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
