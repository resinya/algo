"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：发布订阅器：支持通配事件 `*` 与 `once`；移除监听后不得残留引用。
 *
 * 中文解释（已给出）：这道题要你完成：发布订阅器：支持通配事件 `*` 与 `once`；移除监听后不得残留引用。
 * 输入：事件名、普通监听器、通配监听器 * 与 once 监听器。
 * 输出：emit 时的调用结果；off 后对应函数引用从内部存储移除。
 * 具体例子：on("save",a) 与 on("*",all) 后 emit("save",1) 会依次通知 a(1) 和 all("save",1)。
 * 关键边界：once 只运行一次；事件集合为空后应删除 Map 项，避免残留引用。
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
  console.log("🟡 2026-09-06 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
