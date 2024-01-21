/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  debugger
  // if (!m) {
  //   //   nums1 = [...nums2]
  //   // } else {
  //   //   let j = n - 1, i = m - 1, s = m + n - 1
  //   //   while (i >= 0 && j >= 0) {
  //   //     if (nums1[i] < nums2[j]) {
  //   //       nums1[s] = nums2[j]
  //   //       j--
  //   //     } else {
  //   //       nums1[s] = nums1[i]
  //   //       i--
  //   //     }
  //   //     s--
  //   //   }
  //   //   if (i === 0 && j > 0) {
  //   //     nums1 = [...nums2.slice(0, j + 1), ...nums1.slice(s)]
  //   //   }
  //   // }
  if (!m) {
    nums1 = [...nums2]
  } else {
    let j = n, i = m, s = m + n - 1
    while (i >= 0 && j >= 0) {
      if (nums1[i] < nums2[j]) {
        nums1[s] = nums2[j]
        j--
      } else {
        nums1[s] = nums1[i]
        i--
      }
      s--
    }
    if (i === 0 && j > 0) {
      nums1 = [...nums2.slice(0, j + 1), ...nums1.slice(s)]
    }
  }
  console.log(nums1)
};
// let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// merge(nums1, m, nums2, n)
let nums1 = [0], m = 0, nums2 = [1], n = 1
merge(nums1, m, nums2, n)

