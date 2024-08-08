var canJump = function (nums) {
    let n = nums.length
    let dp = new Array(n).fill(false)
    dp[0] = true
    for (let i = 1; i < n; i++) {
        //判断前面的每个元素跳最大步数侯 能否覆盖到i
        for (let j = 0; j < i; j++) {
            if (dp[j] && j + nums[j] >= i) {
                dp[i] = true
                break
            }
        }
    }
    return dp[n - 1]
};

console.log(canJump([1]))//true
console.log(canJump([0, 1]))//false
console.log(canJump([2, 3, 1, 1, 4]))//true
console.log(canJump([3, 2, 1, 0, 4]))//false
console.log(canJump([1, 5, 1, 0, 4]))//true
