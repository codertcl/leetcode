/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    //由于amount可能为0,所以需要初始化长度未i+1的数组
    //由于下面比较了Math.min(dp[i], dp[i - coin] + 1)，所以需要初始化为Infinity
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0//设置初始值
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            //只有 i大于等于coin才能拼凑
            if (i - coin >= 0) {
                //动态规划转移dp[i]=Math.min(dp[i],dp[i-coin]+1)
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    //可能没有任何一种硬币组合能组成总金额
    return dp[amount] === Infinity ? -1 : dp[amount]
};

console.log(coinChange([1, 2, 5], 11))//3 5+5+1
console.log(coinChange([2], 3))//-1
console.log(coinChange([3], 0))//0
