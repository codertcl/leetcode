var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [], i = 0, j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++
        } else {
            arr.push(nums2[j])
            j++
        }
    }

    if (i === nums1.length) {
        for (let k = j; k < nums2.length; k++) {
            arr.push(nums2[k])
        }
    }
    if (j === nums2.length) {
        for (let k = i; k < nums1.length; k++) {
            arr.push(nums1[k])
        }
    }
    return arr.length % 2 ? arr[Math.floor(arr.length / 2)] : (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
};

console.log(findMedianSortedArrays([1, 3], [2]))//2
console.log(findMedianSortedArrays([1, 2], [3, 4]))//2.5
