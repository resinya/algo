"use strict";

const assert = require("node:assert/strict");
const { nextTick } = require("node:process");

/**
 * 类型：JavaScript 手写
 * 题目要求：函数柯里化：实现 `curry(fn)`；参数凑够后执行，支持一次传多个参数。
 *
 * 中文解释（已给出）：这道题要你完成：函数柯里化：实现 `curry(fn)`；参数凑够后执行，支持一次传多个参数。
 * 输入：待柯里化函数 fn；后续调用可每次传一个或多个参数。
 * 输出：新函数；累计参数数量达到 fn.length 后执行并返回结果。
 * 具体例子：curry((a,b,c)=>a+b+c)(1)(2,3) -> 6。
 * 关键边界：一次传入全部参数也要工作；注意保留调用时的 this。
 *
 * 编码前请先复述并画出关键状态：
 * 1. 用自己的话复述上面的输入与输出。
 * 2. 维护哪些状态/数据结构？
 * 3. 至少一个边界是什么？
 */
function solve(fn) {
  // throw new Error("TODO: 请按题目要求实现");
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

// slow() -- > return fn1()
//fn1(args) --> return
function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-03 02-javascript.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
