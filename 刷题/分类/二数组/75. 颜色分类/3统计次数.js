/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const arr = [0, 0, 0] // 统计 0 1 2分别出现的次数
    for (let num of nums) {
        arr[num]++
    }
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        while (arr[i]) {
            nums[index++] = i // 向新数组中依次push对应次数的 0 1 2
            arr[i]--
        }
    }
    console.log(nums)
};

sortColors([2, 0, 2, 1, 1, 0])
sortColors([2, 0, 1])
