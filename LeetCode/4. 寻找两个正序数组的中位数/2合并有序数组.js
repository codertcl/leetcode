/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [], len1 = nums1.length, len2 = nums2.length, i = 0, j = 0;
    debugger
    while (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i++])
        } else {
            arr.push(nums2[j++])
        }
    }
    if (i === len1) {
        for (let k = j; k < len2; k++) {
            arr.push(nums2[k])
        }
    }
    if (j === len2) {
        for (let k = i; k < len1; k++) {
            arr.push(nums1[k])
        }
    }

    return (arr[Math.floor((arr.length-1)/2)]+arr[Math.floor(arr.length/2)]) / 2

    // return arr.length % 2 === 0 ?
    //     (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2 : arr[(arr.length - 1) / 2]
};

console.log( findMedianSortedArrays([1,3], [2]))//2
console.log( findMedianSortedArrays([1,2], [3,4]))//2.5
console.log( findMedianSortedArrays([0,0], [0,0]))//0
console.log( findMedianSortedArrays([], [1]))//1
console.log( findMedianSortedArrays([3], [-2,-1]))//-1
