/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++ //0元素的个数
        }
    }
    //从j开始遍历，前面全为0
    for (let i = j; i < nums.length; i++) {
        if (nums[i] === 1) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        }
    }
};

sortColors([2, 0, 2, 1, 1, 0])
sortColors([2, 0, 1])
