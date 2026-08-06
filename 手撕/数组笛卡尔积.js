/**
 * dfs 定义result，path，dfs
 * @param {*} arrays
 * @returns
 */

function cartesianProduct(arrays) {
  if (!arrays.length) return [[]];
  const result = [];
  const path = [];
  function dfs(index) {
    if (index === arrays.length) {
      result.push([...path]);
      return;
    }
    const currentArray = arrays[index];
    if (!currentArray.length) {
      dfs(index + 1);
      return;
    }
    for (const item of currentArray) {
      path.push(item);
      dfs(index + 1);
      path.pop();
    }
  }
  dfs(0);
  return result;
}

// 输入: [
//   [1, 2],
//   ["a", "b"],
//   ["x", "y"],
// ];
// 输出: [
//   [1, "a", "x"],
//   [1, "a", "y"],
//   [1, "b", "x"],
//   [1, "b", "y"],
//   [2, "a", "x"],
//   [2, "a", "y"],
//   [2, "b", "x"],
//   [2, "b", "y"],
// ];
