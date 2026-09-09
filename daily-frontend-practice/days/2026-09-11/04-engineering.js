"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：可取消请求管理器：同一 key 的新请求启动时取消旧请求，最新结果才允许写入状态。
 *
 * 中文解释（已给出）：这道题要你完成：可取消请求管理器：同一 key 的新请求启动时取消旧请求，最新结果才允许写入状态。
 * 输入：请求 key、创建 fetch 的函数和写入状态的回调。
 * 输出：同 key 旧请求被取消；只有最新请求的结果能更新状态。
 * 具体例子：search("a") 未完成时启动 search("ab")，前者 abort，最终只写入 ab 的结果。
 * 关键边界：旧请求可能在取消前已经完成，仍需用版本号或引用检查防止过期写入。
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
  console.log("🟡 2026-09-11 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
