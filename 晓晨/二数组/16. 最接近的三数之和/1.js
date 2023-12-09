/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  let res = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1, r = nums.length - 1
    while (l < r) {
      const sum = nums[l] + nums[i] + nums[r]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum < target) {
        l++
      } else if (sum > target) {
        r--
      } else return sum
    }
  }
  return res
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)) // 2
console.log(threeSumClosest([0, 0, 0], 1)) // 0
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)) // -2 [0, -5, 3]