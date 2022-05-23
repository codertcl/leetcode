/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let l = 0, r = 0; r < nums.length; r++) {
        //当nums[r]为1时,此时r会大于l,而由于之前l和r对应值在交换，所以此时nums[l]值为1
        //继续执行循环当nums[r]不为1时，则交换了l和r对应值，即将1交换到了后面
        if (nums[r] !== 1) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
        }
    }
    console.log(nums)
    for (let l = 0, r = 0; r < nums.length; r++) {
        if (nums[r] !== 2) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
        }
    }
    console.log(nums)
};

sortColors([2, 0, 2, 1, 1, 0])
// sortColors([2,0,1])
