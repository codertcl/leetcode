var maxProfit = function (prices) {
    let n = prices.length
    //定义状态dp[i][0] 表示第i天交易完后手里没有股票的最大利润
    // dp[i][1] 表示第 ii 天交易完后手里持有一支股票的最大利润（i从0开始）。
    let dp = Array.from(new Array(n), () => Array(2).fill(0))
    dp[0][0] = 0;
    dp[0][1] = -prices[0]
    for (let i = 1; i < n; i++) {
        //dp[i][0] 的转移方程，如果这一天交易完后手里没有股票，那么可能的转移状态为前一天已经没有股票，即dp[i−1][0]，
        // 或者前一天结束的时候手里持有一支股票，即 dp[i−1][1]，这时候我们要将其卖出，并获得prices[i]的收益
        dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0])
        //再来考虑dp[i][1]，按照同样的方式考虑转移状态，那么可能的转移状态为前一天已经持有一支股票，即dp[i−1][1]
        //或者前一天结束时还没有股票，即dp[i−1][0]，这时候我们要将其买入，并减少 prices[i] 的收益
        dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
    }
    return dp[n - 1][0]
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))//7
console.log(maxProfit([1, 2, 3, 4, 5]))//4
console.log(maxProfit([7, 6, 4, 3, 1]))//0
