/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const res = []
  for (const a of nums1) {
    const index = nums2.indexOf(a)
    if (index!==-1) {
      res.push(a)
      // 避免后续重复的情况
      // 比如有两个数组是这样[1,2]和[2,2]，你看如果你不把比较过的值赋值成false,那他们的交集是不是就是[2,2]了
      nums2[index] = false
    }
  }
  return res
};
console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect( [4,9,5], [9,4,9,8,4]))