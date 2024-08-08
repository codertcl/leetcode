/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    for (let i = 0; i < nums.length - 1; i++) {
        //第一个找到的 右边的元素比左边小 那它就是最小值
        if (nums[i + 1] < nums[i]) {
            return nums[i + 1]
        }
    }
    //完全递增 则返回第一个元素
    return nums[0]
};
console.log(findMin([3, 4, 5, 1, 2]))//1
console.log(findMin([3, 4, 5, 2]))//2
console.log(findMin([3, 4, 5]))//3
