"use strict"; // Day 3 / Exercise 02

const assert = require("node:assert/strict");

/**
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
function mergeIntervals(intervals) {
  // TODO: 在这里写你的实现
  throw new Error("TODO: implement mergeIntervals");
}

function runTests() {
  const intervals = [[8, 10], [1, 3], [15, 18], [2, 6]];
  const snapshot = intervals.map((interval) => [...interval]);

  assert.deepEqual(mergeIntervals(intervals), [[1, 6], [8, 10], [15, 18]]);
  assert.deepEqual(intervals, snapshot, "不应修改输入区间");
  assert.deepEqual(mergeIntervals([[1, 4], [4, 5]]), [[1, 5]]);
  assert.deepEqual(mergeIntervals([[1, 10], [2, 3], [4, 8]]), [[1, 10]]);
  assert.deepEqual(mergeIntervals([[1, 2], [3, 4]]), [[1, 2], [3, 4]]);
  assert.deepEqual(mergeIntervals([[5, 5]]), [[5, 5]]);
  assert.deepEqual(mergeIntervals([]), []);
  console.log("✅ 02 merge intervals tests passed");
}

if (require.main === module) runTests();
module.exports = { mergeIntervals };
