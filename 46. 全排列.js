var permute = function (nums) {
  let res = [];
  let path = []; //记录路径
  const used = new Array(nums.length).fill(0); //数组里的元素都没用过
  function backtrack() {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      path.push(nums[i]); //做选择
      used[i] = 1;
      backtrack(); //递归下一层选择
      //撤销，把最后一个拿出来
      path.pop();
      used[i] = 0;
    }
  }
  backtrack();
  return res;
};
//总结：排列问题优先使用回溯算法
