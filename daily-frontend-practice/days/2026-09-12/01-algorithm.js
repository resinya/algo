"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：算法 / 数据结构
 * 题目要求：搜索旋转排序数组：无重复数字，要求 `O(log n)`；判断哪一半有序。
 *
 * 中文解释（已给出）：这道题要你完成：搜索旋转排序数组：无重复数字，要求 `O(log n)`；判断哪一半有序。
 * 输入：无重复元素的旋转升序数组 nums 与 target。
 * 输出：target 下标，不存在返回 -1。
 * 具体例子：[4,5,6,7,0,1,2], target=0 -> 4。
 * 关键边界：每轮至少有一半有序；边界比较必须明确包含哪一端。
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
  console.log("🟡 2026-09-12 01-algorithm.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
