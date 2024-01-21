/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let n = nums.length
    let left = 0, right = n - 1
    ////
    // while (left <= right) {
    //     let mid = Math.floor(left + (right - left) / 2)
    //     if (nums[mid] < nums[right]) {
    //         right = mid
    //     } else {
    //         left = mid + 1
    //     }
    // }

    //简化版 终止条件为left===right，上面又进行一次循环求解mid,进入到left=mid+1=right+1
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] < nums[right]) {
            //小值在左侧
            right = mid
        } else {
            //小值在右侧
            left = mid + 1
        }
    }
    return nums[right]
};
debugger
console.log(findMin([3, 4, 5, 1, 2]))//1
console.log(findMin([3, 4, 5, 2]))//2
console.log(findMin([3, 4, 5]))//3
