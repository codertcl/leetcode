/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 排序后去重
  nums = [...new Set(nums.sort((a, b) => a -b))]
  let res = 0, cur = 0, prev = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (prev !== nums[i] - i) {
      prev = nums[i] - i
      cur = 1
    } else {
      cur++
    }
    // 修复长度为1的情况
    res = Math.max(res, cur)
  }
  return res
};

// var longestConsecutive = (nums) => {
//   if (nums.length === 0) return 0
//   nums.sort((a, b) => a - b)
//   let max = 1
//   let count = 1
//   for (let i = 0; i < nums.length - 1; i++) {
//     let cur = i, next = i + 1
//     if (nums[cur] === nums[next]) continue // 相同就跳过本次循环
//     if (nums[cur] + 1 === nums[next]) { // 发现连续项 count++
//       count++
//     } else { // 否则，count重置1
//       count = 1
//     }
//     max = Math.max(max, count)
//   }
//   return max
// }

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([4, 5, 1, 3, 2]))
console.log(longestConsecutive([0]))
console.log(longestConsecutive([1,2,0,1]))
