var countTarget = function (scores, target) {
  let count = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === target) {
      count++;
    }
  }
  return count;
};
