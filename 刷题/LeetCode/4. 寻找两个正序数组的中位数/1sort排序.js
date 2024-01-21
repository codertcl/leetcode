/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a, b) => a - b)
    //  const arr = [...nums1, ...nums2].sort((a, b) => a - b)
    return arr.length % 2 === 0 ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2 : arr[(arr.length - 1) / 2]
};
