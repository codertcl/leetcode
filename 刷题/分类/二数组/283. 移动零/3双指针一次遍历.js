/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    //双指针 r每次遍历元素,r对应元素不为0则交换l和r对应元素(此时l对应元素为0)
    for (let r = 0, l = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            [nums[r], nums[l]] = [nums[l], nums[r]]
            l++;
        }
    }
};

moveZeroes([0, 1, 0, 3, 12])//[1,3,12,0,0]
moveZeroes([0, 1, 1])//[1,1,0]
moveZeroes([])//[0]
