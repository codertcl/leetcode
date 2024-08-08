/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const res = [], len = nums.length;
  let a = k % len
  for (let i = 0; i < len; i++) {
    if (i < a) {
      res.push(nums[len - a + i])
    } else {
      res.push(nums[i - a])
    }
  }
  return res
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)) //  [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)) //  [3,99,-1,-100]