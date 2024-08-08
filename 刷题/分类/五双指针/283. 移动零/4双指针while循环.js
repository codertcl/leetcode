/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // 使用双指针，左指针指向当前已经处理好的序列的尾部，右指针指向待处理序列的头部。
    // 右指针不断向右移动，每次右指针指向非零数，则将左右指针对应的数交换，同时左指针右移。
    // 注意到以下性质：
    // 左指针左边均为非零数；l表示当前遍历到的非0元素的个数，也是下一个非0元素yi
    // 右指针左边直到左指针处均为零。
    // 因此每次交换，都是将左指针的零与右指针的非零数交换，且非零数的相对顺序并未改变，应该在的位置
    // 解释一下：如果数组没有0，那么快慢指针始终指向同一个位置，每个位置自己和自己交换；如果数组有0，快指针先走一步，此时慢指针对应的就是0，所以要交换。
    let l = 0, r = 0
    while (r < nums.length) {
        if (nums[r] !== 0) {//遇上非0元素，交换l和r对应的元素
            debugger
            [nums[r], nums[l]] = [nums[l], nums[r]]
            l++//交换之后l++
        }
        r++
    }
};

moveZeroes([0, 1, 0, 3, 12])//[1,3,12,0,0]
moveZeroes([0, 1, 1])//[1,1,0]
moveZeroes([])//[0]
