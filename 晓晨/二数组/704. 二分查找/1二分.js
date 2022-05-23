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
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
};
debugger
console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([1, 2, 3], 1))
console.log(search([1, 2, 3], 2))
console.log(search([1, 2, 3], 3))
console.log(search([1, 2, 3], 0))
