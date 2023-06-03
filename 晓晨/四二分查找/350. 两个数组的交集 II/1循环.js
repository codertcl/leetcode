/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
  let i = 0, j = 0, res = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i])
      i++
      j++
    } else {
      nums1[i] > nums2[j] ? j++ : i ++
    }
  }
  return res
};
console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect( [4,9,5], [9,4,9,8,4]))