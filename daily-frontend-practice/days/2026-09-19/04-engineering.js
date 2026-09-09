"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：离线提示条：根据 online/offline 事件更新状态，并避免重复监听。
 *
 * 中文解释（已给出）：这道题要你完成：离线提示条：根据 online/offline 事件更新状态，并避免重复监听。
 * 输入：window 的 online/offline 事件和初始 navigator.onLine。
 * 输出：当前是否离线的状态与提示条显示/隐藏结果。
 * 具体例子：触发 offline -> state.offline=true 显示“网络已断开”；online -> false 隐藏。
 * 关键边界：初始化就要读取当前状态；重复 mount 不得叠加监听，destroy 时解除。
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
  console.log("🟡 2026-09-19 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
