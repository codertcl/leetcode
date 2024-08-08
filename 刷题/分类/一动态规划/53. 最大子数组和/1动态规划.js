/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (i + 1 === nums.length) {
//       return nums[i]
//     }
//     const sum = maxSubArray(nums.slice(i + 1))
//     max = Math.max(max, nums[i], nums[i] + sum, sum)
//   }
//   return max
// };
var maxSubArray = function(nums) {
  let currMax = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    maxSum = Math.max(currMax, maxSum);
  }
  return maxSum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([-2,1,-3])) // 1