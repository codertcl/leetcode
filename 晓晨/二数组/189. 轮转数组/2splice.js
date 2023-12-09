/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length
  nums.splice(0,0,...nums.splice(-k))
  console.log(nums)
};

rotate([1, 2, 3, 4, 5, 6, 7], 3) // [5,6,7,1,2,3,4]
rotate([-1, -100, 3, 99], 2) // [3,99,-1,-100]
rotate([1], 0) // [1]