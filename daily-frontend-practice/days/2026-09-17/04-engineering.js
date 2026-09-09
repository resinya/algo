"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：图片懒加载：用 IntersectionObserver 设计加载逻辑，并处理图片加载失败占位。
 *
 * 中文解释（已给出）：这道题要你完成：图片懒加载：用 IntersectionObserver 设计加载逻辑，并处理图片加载失败占位。
 * 输入：图片元素、真实 src、占位图和 IntersectionObserver 配置。
 * 输出：进入视口后开始加载，成功解除观察；失败时显示错误占位。
 * 具体例子：观察到 entry.isIntersecting=true -> 把 data-src 写入 src；load 后 observer.unobserve(img)。
 * 关键边界：加载失败也要解除或按策略重试；组件销毁时 disconnect。
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
  console.log("🟡 2026-09-17 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
