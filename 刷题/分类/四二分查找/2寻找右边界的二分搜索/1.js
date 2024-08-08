var search = function (nums, target) {
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
console.log(search([-1, 0, 9, 5, 9, 12], 9))//4
console.log(search([1, 2, 2], 1))//0
console.log(search([1, 2, 2], 2))//2
console.log(search([1, 3, 3], 3))//2
console.log(search([1, 2, 3], 2))//1
