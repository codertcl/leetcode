var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums2, ...nums1].sort((a, b) => a - b)
    return arr.length % 2 ? arr[Math.floor(arr.length / 2)] : (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
};

console.log(findMedianSortedArrays([1,3],[2]))//2
console.log(findMedianSortedArrays([1,2],[3,4]))//2.5
