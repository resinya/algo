/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let count = 1;
  let startIndex = 0;
  let mat = Array.from({ length: n }, () => Array(n).fill(0));

  //   for (let i = 0; i < n; i++) {
  //     mat[i] = [];
  //     for (let k = 0; j < n; j++) {
  //       mat[i][j] = 0;
  //     }
  //   }
  while (count < n * n) {
    for (let j = startIndex; j < n - 1 - startIndex; j++) {
      mat[startIndex][j] = count;
      count++;
    }
    // 从上到下
    for (let i = startIndex; i < n - 1 - startIndex; i++) {
      mat[i][n - 1 - startIndex] = count;
      count++;
    }
    // 从右到左
    for (let j = n - 1 - startIndex; j > startIndex; j--) {
      mat[n - 1 - startIndex][j] = count;
      count++;
    }
    // 从下到上
    for (let i = n - 1 - startIndex; i > startIndex; i--) {
      mat[i][startIndex] = count;
      count++;
    }
    startIndex++;
  }
  if (n % 2 == 1) {
    mat[Math.floor(n / 2)][Math.floor(n / 2)] = count;
  }
  return mat;
};
