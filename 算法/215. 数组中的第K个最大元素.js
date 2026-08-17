function findKthLargest(nums, k) {
  if (nums.length < k) return;
  let res = 0;
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
}
