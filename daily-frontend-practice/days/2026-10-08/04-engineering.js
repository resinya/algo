"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：购物车 reducer：支持增减数量、删除、勾选、全选、总价；每个 action 纯函数实现。
 *
 * 中文解释（已给出）：这道题要你完成：购物车 reducer：支持增减数量、删除、勾选、全选、总价；每个 action 纯函数实现。
 * 输入：购物车 state 与 add/increment/decrement/remove/toggle/selectAll action。
 * 输出：纯 reducer 返回的新 state，以及数量、选中和总价派生值。
 * 具体例子：商品 A 单价 10 数量 2 且选中 -> subtotal 20；decrement 到 0 时按规则删除或夹到 1。
 * 关键边界：未知 action 返回原 state；金额精度和不可变更新。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-08 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

