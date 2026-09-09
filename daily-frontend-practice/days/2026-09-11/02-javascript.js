"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：防抖与节流对比：分别实现 `debounce`、`throttle`；说明输入搜索与滚动监听的选择。
 *
 * 中文解释（已给出）：这道题要你完成：防抖与节流对比：分别实现 `debounce`、`throttle`；说明输入搜索与滚动监听的选择。
 * 输入：函数 fn、时间间隔 wait 与一串高频调用。
 * 输出：debounce 在停止后执行一次；throttle 在时间窗口内最多执行一次。
 * 具体例子：搜索输入 a/ab/abc 适合 debounce，只请求 abc；滚动位置持续上报适合 throttle。
 * 关键边界：都要保留 this/参数；定时器结束、取消和首尾触发规则要明确。
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
  console.log("🟡 2026-09-11 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
