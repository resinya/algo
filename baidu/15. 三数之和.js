// var threeSum = function (nums) {
//   let otherTwo = 0;
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     otherTwo = 0 - nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[j] + nums[k] === otherTwo) {
//           res.push([nums[i], nums[j], nums[k]]);
//           //   console.log(nums[i], nums[j], nums[k], nums[i] + nums[j] + nums[k]);
//         }
//       }
//     }
//   }
//   const set = new Set();
//   const ans = [];
//   for (let i = 0; i < res.length; i++) {
//     res[i].sort((a, b) => a - b);
//     const str = res[i].join(",");
//     if (!set.has(str)) {
//       set.add(str);
//       ans.push(res[i]);
//     }
//   }

//   return ans;
// };

var threeSum = function (nums) {
  const res = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    const target = -nums[i];
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[i] === nums[i + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < target) {
        l++; // 和太小，左指针右移变大
      } else {
        r--; // 和太大，右指针左移变小
      }
    }
  }
};

threeSum([-1, 0, 1, 2, -1, -4]);

//自己写的，缺少去重理解，暴力求解
// 没有想到先对数组排序，排序是去重、缩小查找范围、剪枝的关键前置操作，你全程裸遍历无序数组，导致后续去重成本极高。
//不会利用数字大小特性提前跳出循环（比如排序后第一个数大于 0，直接结束外层循环），全部循环跑完，做大量无效计算。
