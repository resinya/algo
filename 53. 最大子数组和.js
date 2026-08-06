var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let max = -Infinity;
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += nums[i];
  }
  for (let l = 0; l < nums.length; l++) {
    let sum = total;
    max = Math.max(max, sum);

    let cur = sum;

    for (let r = nums.length - 1; r >= l; r--) {
      cur -= nums[r];
      max = Math.max(max, cur);
    }
    // 下一轮左边多丢一个
    total -= nums[l];
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

var maxSubArray = function (nums) {
  let pre = 0;
  let res = -Infinity;
  for (const x of nums) {
    pre = Math.max(x, pre + x);
    res = Math.max(res, pre);
  }
  return res;
};
