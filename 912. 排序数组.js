//!冒泡排序
// var sortArray = function (nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 1; j < nums.length - i; j++) {
//       if (nums[j] < nums[j - 1]) {
//         // let temp = 0;
//         // temp = nums[j];
//         // nums[j] = nums[j - 1];
//         // nums[j - 1] = temp;
//         [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
//       }
//     }
//   }
//   return nums;
// };

var sortArray = function (nums) {
  // 递归函数：处理数组 [l, r] 闭区间
  const quick = (l, r) => {
    // 终止条件：左边界 >= 右边界，区间只有1个/没有元素，不用排序
    if (l >= r) return;

    // 基准值 pivot：取当前区间最右边的元素
    let pivot = nums[r];
    // i 是「小于pivot区域的右边界」，初始等于区间最左
    let i = l;

    // j 遍历当前区间除最后一位(pivot)以外的所有元素
    for (let j = l; j < r; j++) {
      // 如果当前元素比基准小
      if (nums[j] < pivot) {
        // 把这个小数交换到 i 的位置
        [nums[i], nums[j]] = [nums[j], nums[i]];
        // 小于区右边界右移一位
        i++;
      }
    }

    // 循环结束后：[l, i-1] 全 < pivot；[i, r-1] 全 >= pivot
    // 把基准 pivot 交换到 i 的位置，基准就位，i 就是基准最终下标
    [nums[i], nums[r]] = [nums[r], nums[i]];

    // 递归处理基准左边区间
    quick(l, i - 1);
    // 递归处理基准右边区间
    quick(i + 1, r);
  };

  // 初始调用：处理整个数组，左0，右最后一个下标
  quick(0, nums.length - 1);
  return nums;
};
// 选最右侧元素当基准，把小于基准的全部挪到左边，大于等于的留在右边，再递归处理左右两段。
let res = sortArray([5, 2, 3, 1]);
console.log(res);
