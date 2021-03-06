/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    //记录0元素个数，便于后面补0
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            //删除0
            nums.splice(i, 1)
            count++
            //由于删除后元素前移，所以需要重新判断当前位置的数据是否为0
            i--
        }
    }
    for (let i = 0; i < count; i++) nums.push(0)
};


moveZeroes([0,1,0,3,12])//[]
moveZeroes([0, 1, 0, 3, 12])//[1,3,12,0,0]
moveZeroes([0, 0, 1])//[1,0,0]
moveZeroes([0])//[0]
