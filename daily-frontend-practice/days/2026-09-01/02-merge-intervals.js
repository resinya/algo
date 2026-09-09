"use strict"; // Day 3 / Exercise 02

//!result就是一个当前正在合并的大箱子，每次有新的区间去比较一下能不能加上去
//!有了箱子思维，就判断能加或者不能加
//*新来的节点起点小于等于大箱子终点

const assert = require("node:assert/strict");

/**
 * 中文解释（已给出）：先按起点排序，再把相互重叠或端点相接的闭区间合并成更大的区间。
 * 输入：二维数组 intervals，每项是 [start, end] 且 start <= end。
 * 输出：按起点升序排列的合并后区间数组，不能修改原输入。
 * 具体例子：[[1,3],[2,6],[8,10]] -> [[1,6],[8,10]]；[1,3] 与 [2,6] 有重叠。
 * 关键边界：[] 返回 []；[1,4] 与 [4,5] 端点相接，也要合并为 [1,5]。
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
function mergeIntervals(intervals) {
  // TODO: 在这里写你的实现
  // throw new Error("TODO: implement mergeIntervals");
  if (intervals.length === 0) return []; //边界

  // 拷贝并排序（不影响原数组）
  const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);
  const result = [sorted[0]]; // 先把第一个区间放进去 [1,3]

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i]; //[2,6]
    const last = result[result.length - 1]; //[1,3]

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[([1], current[1])]);
    } else {
      result.push(current);
    }
  }
  return result;
}

function runTests() {
  const intervals = [
    [8, 10],
    [1, 3],
    [15, 18],
    [2, 6],
  ];
  const snapshot = intervals.map((interval) => [...interval]);

  assert.deepEqual(mergeIntervals(intervals), [
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
  assert.deepEqual(intervals, snapshot, "不应修改输入区间");
  assert.deepEqual(
    mergeIntervals([
      [1, 4],
      [4, 5],
    ]),
    [[1, 5]],
  );
  assert.deepEqual(
    mergeIntervals([
      [1, 10],
      [2, 3],
      [4, 8],
    ]),
    [[1, 10]],
  );
  assert.deepEqual(
    mergeIntervals([
      [1, 2],
      [3, 4],
    ]),
    [
      [1, 2],
      [3, 4],
    ],
  );
  assert.deepEqual(mergeIntervals([[5, 5]]), [[5, 5]]);
  assert.deepEqual(mergeIntervals([]), []);
  console.log("✅ 02 merge intervals tests passed");
}

if (require.main === module) runTests();
module.exports = { mergeIntervals };
