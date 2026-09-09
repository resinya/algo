"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：带缓存的请求函数：相同 key 在有效期内复用结果；支持手动失效。
 *
 * 中文解释（已给出）：这道题要你完成：带缓存的请求函数：相同 key 在有效期内复用结果；支持手动失效。
 * 输入：缓存 key、请求函数、ttl 和当前时间。
 * 输出：有效期内复用值或进行中的 Promise；失效后重新请求。
 * 具体例子：get("user:1") 连续调用两次且首个未完成 -> 网络函数只执行一次，两次得到同一结果。
 * 关键边界：失败结果通常不缓存；手动 invalidate 后下一次必须重新请求。
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
  console.log("🟡 2026-09-12 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
