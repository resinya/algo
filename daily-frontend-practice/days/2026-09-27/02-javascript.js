"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `EventEmitter` 变式：emit 中监听器自行 off 时，其他监听器仍按预期执行。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `EventEmitter` 变式：emit 中监听器自行 off 时，其他监听器仍按预期执行。
 * 输入：事件名与多个监听器，其中某个监听器可能在执行时 off 自己。
 * 输出：本轮 emit 按开始时快照调用，下一轮不再调用已移除监听器。
 * 具体例子：A 执行时 off(A)，B 仍在本轮执行；第二次 emit 只执行 B。
 * 关键边界：遍历原 Set 时直接删除可能改变行为，先复制监听器快照。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-27 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

