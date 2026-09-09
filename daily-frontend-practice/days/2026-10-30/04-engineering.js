"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：代码重构：将一个混合了请求、格式化、渲染状态的函数拆成纯函数与副作用层，并补测试点。
 *
 * 中文解释（已给出）：这道题要你完成：代码重构：将一个混合了请求、格式化、渲染状态的函数拆成纯函数与副作用层，并补测试点。
 * 输入：一个同时请求、格式化数据、切换 loading、拼接 UI 文案的函数。
 * 输出：副作用协调层、纯格式化函数、状态转换及测试点。
 * 具体例子：formatUsers(response) 独立纯函数；loadUsers 只编排 api 与状态，测试可分别注入假 api。
 * 关键边界：错误/finally、取消、旧响应和纯函数不修改输入。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-30 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

