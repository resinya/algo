"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：表单校验器：配置式支持 required、minLength、pattern；输出字段错误信息对象。
 *
 * 中文解释（已给出）：这道题要你完成：表单校验器：配置式支持 required、minLength、pattern；输出字段错误信息对象。
 * 输入：字段值对象与 required、minLength、pattern 规则配置。
 * 输出：按字段名组织的错误信息对象；无错误字段不出现。
 * 具体例子：values={name:"A"}, rules.name.minLength=2 -> {name:"至少输入 2 个字符"}。
 * 关键边界：空值是否继续执行后续规则要统一；正则对象的 lastIndex 风险要考虑。
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
  console.log("🟡 2026-09-05 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
