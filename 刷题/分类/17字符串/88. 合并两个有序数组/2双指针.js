/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let res = [], j = 0, i = 0
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      res.push(nums1[i])
      i++
    } else {
      res.push(nums2[j])
      j++
    }
  }
  if (i === m && j < n) {
    res = res.concat(nums2.slice(j, n))
  } else if (j === n && i < m) {
    res = res.concat(nums1.slice(i, m))
  }
  for (let k = 0; k < m + n; k++) {
    nums1[k] = res[k]
  }
  console.log(nums1)
};
let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
merge(nums1, m, nums2, n)
