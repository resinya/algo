"use strict"; // Day 3 / Exercise 01

const assert = require("node:assert/strict");

// 这段代码要实现的是 「长度最小的子数组」 问题（LeetCode 209 变体）：
// 给你一个正整数数组 nums 和一个目标值 target。
// 你需要找到 连续 的子数组，使得该子数组的元素和 ≥ target。
// 返回满足条件的所有子数组中 最短的长度。
// 如果不存在这样的子数组（即整个数组的和都小于 target），则返回 0。
/**
 * 中文解释（已给出）：在只含正整数的数组中，寻找元素和至少为 target 的最短连续片段。
 * 输入：正整数 target 与正整数数组 nums。
 * 输出：满足条件的最短长度；没有满足条件的连续子数组时返回 0。
 * 具体例子：target=7、nums=[2,3,1,2,4,3] -> 2，因为最短答案是 [4,3]。
 * 关键边界：nums=[] 返回 0；单个元素就达到 target 时返回 1；不修改 nums。
 * @param {number} target
 * @param {number[]} nums
 * @returns {number}
 */
function minSubArrayLen(target, nums) {
  // TODO: 在这里写你的实现
  // throw new Error("TODO: implement minSubArrayLen");
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(sum, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

function runTests() {
  const nums = [2, 3, 1, 2, 4, 3];
  const snapshot = [...nums];

  assert.equal(minSubArrayLen(7, nums), 2);
  assert.deepEqual(nums, snapshot, "不应修改输入数组");
  assert.equal(minSubArrayLen(4, [1, 4, 4]), 1);
  assert.equal(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]), 0);
  assert.equal(minSubArrayLen(5, [5]), 1);
  assert.equal(minSubArrayLen(11, [1, 2, 3, 4, 5]), 3);
  assert.equal(minSubArrayLen(1, []), 0);
  console.log("✅ 01 min subarray length tests passed");
}

if (require.main === module) runTests();
module.exports = { minSubArrayLen };
