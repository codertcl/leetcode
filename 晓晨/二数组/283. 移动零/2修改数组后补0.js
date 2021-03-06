/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            //将所有非0元素依次移到最前面
            nums[j] = nums[i]
            j++
        }
    }
    for (let i = j; i < nums.length; i++) nums[i] = 0
};


moveZeroes([0, 1, 0, 3, 12])//[1,3,12,0,0]
moveZeroes([0, 0, 1])//[1,0,0]
moveZeroes([0])//[0]
