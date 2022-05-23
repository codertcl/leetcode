/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
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
    if (left >= nums.length || nums[left] != target)
        return -1;
    return left
};
debugger
console.log(search([-1, 0, 9, 5, 9, 12], 9))//2
console.log(search([1, 2, 1], 1))//0
console.log(search([1, 2, 2], 2))//1
console.log(search([1, 3, 3], 3))//1
console.log(search([1, 2, 3], 2))//1
