function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  let startIndex = 0;
  let endIndex = 0;
  let tempStartIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] > nums[i]) {
      currentSum += nums[i];
    } else {
      currentSum = nums[i];
      tempStartIndex = i;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      startIndex = tempStartIndex;
      endIndex = i;
    }
  }
  return nums.slice(startIndex, endIndex + 1);
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 输出 [4, -1, 2, 1]
console.log(maxSubArray([-2,1,-3])) // [1]