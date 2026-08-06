function filterByFrequency(arr, n) {
  const freq = new Map();
  for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1);
  }
  console.log(...freq.entries());

  return [...freq.entries()]
    .filter(([_, count]) => count >= n)
    .map(([item]) => item);
}

// 示例
filterByFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 3); // [3,4]
