"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：手写 `escapeHtml`：转义 `& < > " '`，说明它防的是哪类 XSS 风险。
 *
 * 中文解释（已给出）：这道题要你完成：手写 `escapeHtml`：转义 `& < > " '`，说明它防的是哪类 XSS 风险。
 * 输入：不可信文本字符串。
 * 输出：把 & < > " 和 单引号替换为 HTML 实体的安全文本。
 * 具体例子：escapeHtml("<img title=\"x\">") -> "&lt;img title=&quot;x&quot;&gt;"。
 * 关键边界：& 必须先转义避免二次处理；这只适合 HTML 文本上下文，不等于完整 XSS 防护。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-20 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

