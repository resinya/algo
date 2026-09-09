"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：配置加载器：合并默认、环境、运行时配置；校验必填字段并给出错误信息。
 *
 * 中文解释（已给出）：这道题要你完成：配置加载器：合并默认、环境、运行时配置；校验必填字段并给出错误信息。
 * 输入：default、environment、runtime 三层配置和必填 schema。
 * 输出：按优先级合并且校验后的配置，或可读错误列表。
 * 具体例子：default.api=/api，environment.api=/staging，runtime 未给 -> 最终 /staging。
 * 关键边界：只合并允许字段；类型错误、空必填值和秘密字段不能泄露。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-27 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

