"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：富文本预览安全层：对输入 HTML 做白名单过滤设计，并说明生产应使用成熟库。
 *
 * 中文解释（已给出）：这道题要你完成：富文本预览安全层：对输入 HTML 做白名单过滤设计，并说明生产应使用成熟库。
 * 输入：用户提供的 HTML 和允许标签/属性白名单。
 * 输出：移除危险节点/属性后的预览 HTML 与风险说明。
 * 具体例子：<p onclick="steal()">Hi<script>x()</script></p> -> <p>Hi</p>。
 * 关键边界：生产使用成熟 sanitizer；URL 协议、style、SVG 等都有额外风险。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-20 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

