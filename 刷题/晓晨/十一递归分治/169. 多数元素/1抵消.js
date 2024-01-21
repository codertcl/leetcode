/**
 * @param {number[]} nums
 * @return {number}
 */
//投票法，众数个数至少比非众数多一，把COUNT加减当作一个众数抵消掉一个非众数，剩下的一定是众数
var majorityElement = function (nums) {
    //记录出现次数
    let value = nums[0], count = 1
    for (let i = 1; i < nums.length; i++) {
        //count为0 则更新当前众数
        if (count === 0) {
            value = nums[i]
        }
        //遇到相同元素,count++反之count--
        if (nums[i] === value) {
            count++
        } else
            count--
    }
    return value
};
console.log(majorityElement([3, 2, 3]))//3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))//2
