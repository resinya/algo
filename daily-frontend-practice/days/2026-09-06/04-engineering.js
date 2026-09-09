"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：虚拟列表计算器：给定滚动距离、行高、视口高度，计算应渲染的起止下标与上下占位高度。
 *
 * 中文解释（已给出）：这道题要你完成：虚拟列表计算器：给定滚动距离、行高、视口高度，计算应渲染的起止下标与上下占位高度。
 * 输入：总条数、scrollTop、固定行高、视口高度和 overscan。
 * 输出：start/end 下标、应渲染切片、顶部与底部占位高度。
 * 具体例子：100 项、行高 20、scrollTop=100、视口高 60、overscan=0 -> start=5,end=7,top=100,bottom=1840。
 * 关键边界：下标要夹在有效范围；最后一屏不能产生负占位高度。
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
  console.log("🟡 2026-09-06 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
