var rob = function (nums) {
    let n = nums.length
    if (n === 0) return 0
    if (n === 1) {
        return nums[0]
    }
    if (n === 2) {
        return Math.max(...nums)
    }
    //初始化
    let first = nums[0], second = Math.max(nums[0], nums[1]), third = null
    for (let i = 2; i < n; i++) {
        third = Math.max(second, first + nums[i])
        first = second
        second = third
    }
    return third
};

console.log(rob([1, 2, 3, 1]))//4
console.log(rob([2, 7, 9, 3, 1]))//12
