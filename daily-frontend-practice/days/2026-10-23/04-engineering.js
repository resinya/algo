"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：API Client：统一 baseURL、超时、错误对象、请求 id、取消和响应解析。
 *
 * 中文解释（已给出）：这道题要你完成：API Client：统一 baseURL、超时、错误对象、请求 id、取消和响应解析。
 * 输入：baseURL、path、options、timeout、requestId 和 AbortSignal。
 * 输出：统一成功数据或结构化错误，支持取消与响应解析。
 * 具体例子：get("/users") -> 请求 baseURL+/users，响应 404 -> {type:"HTTP",status:404,requestId}。
 * 关键边界：204 无 JSON、超时/主动取消区分、路径拼接和敏感头脱敏。
 *
 * 编码前请先复述以上输入输出，再补充核心状态与复杂度。
 */
function solve(input) {
  throw new Error("TODO: 请按题目要求实现");
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-10-23 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };

