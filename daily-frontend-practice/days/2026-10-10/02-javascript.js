"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `groupBy`：按回调结果分组，安全处理 `__proto__` 等特殊键。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `groupBy`：按回调结果分组，安全处理 `__proto__` 等特殊键。
 * 输入：数组 items 与返回分组键的 callback。
 * 输出：按键分组的安全容器。
 * 具体例子：groupBy([1,2,3,4],n=>n%2?"odd":"even") -> {odd:[1,3],even:[2,4]}。
 * 关键边界：键可能是 "__proto__"，应使用 Map 或 Object.create(null)。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-10 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

