"use strict";

const assert = require("node:assert/strict");

/**
 * 类型：工程小功能
 * 题目要求：表格排序器：支持单列升降序、数字/中文字符串/空值；不得修改原始列表。
 *
 * 中文解释（已给出）：这道题要你完成：表格排序器：支持单列升降序、数字/中文字符串/空值；不得修改原始列表。
 * 输入：数据行数组、排序字段与 asc/desc 方向。
 * 输出：排序后的新数组，原列表顺序不变。
 * 具体例子：按 score 升序排序 [{id:1,score:20},{id:2,score:10}] -> id 顺序 [2,1]。
 * 关键边界：数字、中文字符串和空值要有明确比较规则；相等项保持稳定。
 *
 * 编码前请先复述并画出关键状态：
 * 1. 用自己的话复述上面的输入与输出。
 * 2. 维护哪些状态/数据结构？
 * 3. 至少一个边界是什么？
 */
function solve(input) {
  function Table({ row }) {
    const [sort, setSort] = useSatte({
      order: "asc",
    });
    function handleSort() {
      setSort((prev) => ({
        order: prev.order === "asc" ? "desc" : "asc",
      }));
    }
  }
}
{
  /* <Table rows={rows} sort={sort} onSortChange={setSort}></Table>  */
}
function runTests() {
  // 按 2026-08-21 的断言风格：补充样例、边界、输入不变性等 assert。
  assert.equal(typeof solve, "function");
  console.log("🟡 2026-09-04 04-engineering.js：请补充实现与题目专属断言");
}

if (require.main === module) runTests();
module.exports = { solve };
