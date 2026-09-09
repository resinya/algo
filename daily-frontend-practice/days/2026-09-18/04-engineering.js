"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：可拖拽排序：完成纯数据层的 `moveItem(list, from, to)`，处理越界且不改原数组。
 *
 * 中文解释（已给出）：这道题要你完成：可拖拽排序：完成纯数据层的 `moveItem(list, from, to)`，处理越界且不改原数组。
 * 输入：列表 list、原下标 from、目标下标 to。
 * 输出：移动元素后的新数组，原数组不变。
 * 具体例子：moveItem(["a","b","c"],0,2) -> ["b","c","a"]。
 * 关键边界：from/to 越界时采用抛错或夹取策略并写清；from===to 返回等值新数组。
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
  console.log("🟡 2026-09-18 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
