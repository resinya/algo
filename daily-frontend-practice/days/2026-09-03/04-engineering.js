"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：Todo 数据层：实现新增、切换完成、删除、筛选和统计；所有更新必须返回新数组。
 *
 * 中文解释（已给出）：这道题要你完成：Todo 数据层：实现新增、切换完成、删除、筛选和统计；所有更新必须返回新数组。
 * 输入：Todo 数组和 add/toggle/remove/filter 等操作参数。
 * 输出：每次操作后的新数组，以及总数、已完成数等统计。
 * 具体例子：add([], {id:1,text:"学习"}) -> [{id:1,text:"学习",done:false}]；toggle 后 done=true。
 * 关键边界：找不到 id 时保持数据不变；任何更新都不能修改原数组或原对象。
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
  console.log("🟡 2026-09-03 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
