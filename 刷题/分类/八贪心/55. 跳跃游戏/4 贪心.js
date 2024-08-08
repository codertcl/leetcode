/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        // 确保能跳到i位置
        if (i <= max) {
            max = Math.max(max, i + nums[i]);
            if (max >= nums.length - 1) return true;
        }
    }
    return false;
};

console.log(canJump([3, 2, 1, 0, 4]))// false
console.log(canJump([2, 3, 1, 1, 4]))// true
console.log(canJump([0]))// true
console.log(canJump([0, 2, 3]))// false
