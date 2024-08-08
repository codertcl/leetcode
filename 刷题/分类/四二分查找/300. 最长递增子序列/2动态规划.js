var lengthOfLIS = function (nums) {
    if (nums.length < 2) return nums.length
    //dp[i]表示以 nums[i] 这个数结尾的最长递增子序列的长度
    let dp = Array(nums.length).fill(1)
    //动态规划转移方程 dp[j]=Max(dp[i])+1 0<=i<j<nums.length&&nums[i]<nums[j]
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (nums[i] > nums[j]) {
    //             dp[i] = Math.max(dp[i], dp[j] + 1)
    //         }
    //     }
    // }
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[j] = Math.max(dp[j], dp[i] + 1)
            }
        }
    }
    return Math.max(...dp)
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))//4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))//4
console.log(lengthOfLIS([4, 4, 4]))//1
