var maxProfit = function (prices) {
    let n = prices.length
    let dp0 = 0, dp1 = -prices[0]
    for (let i = 1; i < n; i++) {
        let newDp0 = Math.max(dp1 + prices[i], dp0)
        let newDp1 = Math.max(dp0 - prices[i], dp1)
        dp0 = newDp0
        dp1 = newDp1
    }
    return dp0
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))//7
console.log(maxProfit([1, 2, 3, 4, 5]))//4
console.log(maxProfit([7, 6, 4, 3, 1]))//0
