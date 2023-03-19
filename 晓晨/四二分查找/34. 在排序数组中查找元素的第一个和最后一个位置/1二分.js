var searchLeft = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        //折中取mid
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] === target) {
            right = mid - 1//向左查找
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    //循环终止条件为left=right+1
    if (left >= nums.length || nums[left] !== target)
        return -1;
    return left
};

var searchRight = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        //折中取mid
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] === target) {
            left = mid + 1//向右查找
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    if (right < 0 || nums[right] !== target)
        return -1;
    return right;
};
var searchRange = function (nums, target) {
    return [searchLeft(nums, target), searchRight(nums, target)]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 0))
console.log(searchRange([], 0))
