var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    let currentVal = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      currentVal.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(currentVal);
  }
};
