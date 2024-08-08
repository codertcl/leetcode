/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === nums[i - 2]) {
      nums.splice(i--, 1);
    }
  }
  console.log(nums)
  return nums.length
};
removeDuplicates([1, 1, 1, 2, 2, 3])
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])