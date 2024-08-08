/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let l = 0, r = 0
    while (r < nums.length) {
        if (nums[r] !== 0) {//遇上非0元素，交换l和r对应的元素
            [nums[r], nums[l]] = [nums[l], nums[r]]
            l++//交换之后l++
        }
        r++
    }
};

moveZeroes([0, 1, 0, 3, 12])//[1,3,12,0,0]
moveZeroes([0, 1, 1])//[1,1,0]
moveZeroes([])//[0]
