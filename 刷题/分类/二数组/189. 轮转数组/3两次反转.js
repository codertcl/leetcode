/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse = (nums, l, r) => {
  while (l < r) {
    [nums[l++], nums[r--]] = [nums[r], nums[l]]
  }
}
var rotate = function (nums, k) {
  k = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0,  k -1)
  reverse(nums, k,  nums.length - 1)
  console.log(nums)
};

rotate([1, 2, 3, 4, 5, 6, 7], 3) // [5,6,7,1,2,3,4]
rotate([-1, -100, 3, 99], 2) // [3,99,-1,-100]
rotate([1], 0) // [1]