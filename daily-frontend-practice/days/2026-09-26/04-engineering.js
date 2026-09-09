"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：商品曝光统计：元素首次进入可视区上报一次，离开再进入不重复上报。
 *
 * 中文解释（已给出）：这道题要你完成：商品曝光统计：元素首次进入可视区上报一次，离开再进入不重复上报。
 * 输入：商品元素条目、sku、观察器 entry 与上报函数。
 * 输出：每个商品第一次进入可视区时的一次上报记录。
 * 具体例子：sku=A 首次 isIntersecting=true -> report(A) 并加入 seen；再次进入时 seen 已有 A，不再上报。
 * 关键边界：缺失 sku 不上报；销毁时 disconnect；列表复用 DOM 时 key 必须跟业务项走。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：为题目样例、边界、输入不变性补充 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-26 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

