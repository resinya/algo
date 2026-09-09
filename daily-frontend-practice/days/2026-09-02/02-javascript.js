"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：JavaScript 手写
 * 题目要求：数组扁平化：实现 `flat(array, depth = Infinity)`；跳过稀疏数组空位，不能调用原生 `flat`。
 *
 * 中文解释（已给出）：这道题要你完成：数组扁平化：实现 `flat(array, depth = Infinity)`；跳过稀疏数组空位，不能调用原生 `flat`。
 * 输入：待扁平化数组 array 与展开深度 depth。
 * 输出：展开到指定层数的新数组，不修改 array。
 * 具体例子：flat([1,[2,[3]]], 1) -> [1,2,[3]]；depth=2 时得到 [1,2,3]。
 * 关键边界：稀疏数组空位要跳过；depth=0 返回浅拷贝。
 *
 * 编码前请先复述并画出关键状态：
 * 1. 用自己的话复述上面的输入与输出。
 * 2. 维护哪些状态/数据结构？
 * 3. 至少一个边界是什么？
 */

function solve(input, depth) {
  // throw new Error("TODO: 请按题目要求实现");
  if (depth <= 0 || !Array.isArray(input)) {
    return Array.isArray(input) ? [...input] : input;
  }
  const res = [];
  function dfs(arr, curDep) {
    for (const item of arr) {
      if (Array.isArray(item) && curDep > 0) {
        dfs(item, curDep - 1);
      } else {
        res.push(item);
      }
    }
  }
  dfs(input, depth);
  return res;
}

function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-02 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
