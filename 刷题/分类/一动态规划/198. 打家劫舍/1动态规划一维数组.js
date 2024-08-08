/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length
    if (n === 0) return 0
    if (n === 1) {
        return nums[0]
    }
    if (n === 2) {
        return Math.max(...nums)
    }
    let dp = Array(n).fill(-Infinity)
    //初始化
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[n - 1]
};

console.log(rob([1, 2, 3, 1]))//4
console.log(rob([2, 7, 9, 3, 1]))//12
