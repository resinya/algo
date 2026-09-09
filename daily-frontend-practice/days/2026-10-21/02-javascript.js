"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：EventEmitter 复写：支持 once、off 与 emit 参数转发。
 *
 * 中文解释（已给出）：这道题要你完成：EventEmitter 复写：支持 once、off 与 emit 参数转发。
 * 输入：eventName、listener 与 emit 参数。
 * 输出：on/once/off 行为；emit 同步转发参数。
 * 具体例子：once("ready",fn) 后 emit("ready",1,2) 调用 fn(1,2)，第二次 emit 不再调用。
 * 关键边界：emit 中 off 不破坏本轮快照；空事件集合及时删除。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-21 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

