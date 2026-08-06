var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  let leftToRight = true;
  while (queue.length) {
    let size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (!leftToRight) {
      level.reverse();
    }
    res.push(level);
    leftToRight = !leftToRight;
  }
  return res;
};

// queue 保存当前层节点。
// 每层开始记录当前层节点数 size。
// 建立一个临时数组 level。
// 弹出 size 个节点，把 node.val 放进 level。
// 左右孩子进入 queue。
// 当前层结束后，根据方向决定是否反转 level。
// 加入 res。
// 翻转方向。
