var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else return mid
    }
    // //从后开始向后移动 避免覆盖
    // for (let i = nums.length - 1; i >= left; i--) {
    //     nums[i + 1] = nums[i]
    // }
    // //left=right+1 left就是插入位置
    // nums[left] = target
    return left
};

console.log(searchInsert([1, 3, 5, 6], 5))//2
console.log(searchInsert([1, 3, 5, 6], 2))//1
console.log(searchInsert([1, 3, 5, 6], 7))//4

