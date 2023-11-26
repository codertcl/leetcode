/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2]
  for (let i = 1; i < nums.length - 2; i++) {
    const sum = nums[i] + nums[i + 1] + nums[i + 2]
    let a = Math.abs(target - sum), b = Math.abs(target - res)
    res = a < b ? sum : res
  }
  return res
};

console.log(threeSumClosest([-1,2,1,-4], 1)) // 2
console.log(threeSumClosest([0, 0, 0], 1)) // 0
console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2)) // -2 [0, -5, 3]