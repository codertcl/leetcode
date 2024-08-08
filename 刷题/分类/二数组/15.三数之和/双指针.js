/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i, r = nums.length - 1
    if (nums[i] > 0) {//// 如果当前数字大于0，则三数之和一定大于0，所以结束循环
      break;
    }
    let n1 = nums[l]
    if (n1 === nums[l + 1]) {
      continue
    }
    while (l < r) {
      let n2 = nums[l + 1], n3 = nums[r];
      if (n1 + n2 + n3 > 0) {
        r--
      } else if (n1 + n2 + n3 < 0) {
        l++
      } else {
        res.push([n1, n2, n3])
        while (l < r && nums[l] === n1) l++ //去重，至少保证l自增一次
        while (l < r && nums[r] === n3) r--
      }
    }
  }
  return res
};
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // 输出：[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])) // 输出：[]