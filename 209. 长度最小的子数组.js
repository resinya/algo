function minSubArrayLen(nums, target) {
  let slow = 0;
  let fast = 0;
  let mySum = 0;
  let minLen = Infinity;
  while (true) {
    mySum += nums[fast];
    while (mySum >= target) {
      minLen = Math.min(minLen, fast - slow + 1);
      mySum -= nums[slow];
      slow += 1;
    }
    fast++;
  }
  return minLen !== Infinity ? minLen : 0;
}
