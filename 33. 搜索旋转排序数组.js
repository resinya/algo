var search = function (nums, target) {
  if (!nums.includes(target)) return -1;
  return nums.indexOf(target);
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
