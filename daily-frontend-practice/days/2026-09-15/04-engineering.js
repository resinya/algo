"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：菜单权限树：根据角色权限过滤树，父节点无可见子项时移除；不修改原树。
 *
 * 中文解释（已给出）：这道题要你完成：菜单权限树：根据角色权限过滤树，父节点无可见子项时移除；不修改原树。
 * 输入：原菜单树和当前角色拥有的 permission 集合。
 * 输出：只含可见节点的新树；无可见子项且自身无权限的父节点被移除。
 * 具体例子：admin 下只有 user:list，权限仅含 user:list -> 保留 admin 和 user:list，删除 sibling 节点。
 * 关键边界：不修改原树；父节点自身有权限时即使 children 为空是否保留要明确。
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
  console.log("🟡 2026-09-15 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
