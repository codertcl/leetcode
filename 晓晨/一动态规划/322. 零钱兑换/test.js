/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);//初始化为无穷大的数
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i])
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};

debugger
console.log(coinChange([1, 2, 5], 11))//3 5+5+1
console.log(coinChange([2], 3))//-1
console.log(coinChange([3], 0))//0
