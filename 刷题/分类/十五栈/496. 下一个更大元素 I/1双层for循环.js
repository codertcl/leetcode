/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const res = []
  for (let i = 0; i < nums1.length ; i++) {
    let flag = false
    for (let j = 0; j < nums2.length ; j++) {
      if (nums2[j] === nums1[i]) {
        flag = true
      }
      if (flag && nums2[j] > nums1[i]) {
        res.push(nums2[j])
        break
      }
    }
    if (res.length !== i + 1) {
      res.push(-1)
    }
  }
  return res
};

console.log(nextGreaterElement([4,1,2],  [1,3,4,2]))
console.log(nextGreaterElement([2,4],   [1,2,3,4]))