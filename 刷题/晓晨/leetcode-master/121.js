//时间复杂度O(n) 空间复杂度O(1)
const maxProfit = function (prices) {
  let n = prices.length;
  let dp = Array.from(new Array(n), () => new Array(2));
  dp[0] = 0;
  dp[1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[0] = Math.max(dp[0], dp[1] + prices[i]);
    dp[1] = Math.max(dp[1], -prices[i]);
  }
  return dp[0];
};

//语意化
const maxProfit = function (prices) {
  let n = prices.length;
  let sell = 0;
  let buy = -prices[0];
  for (let i = 1; i < n; i++) {
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, -prices[i]);
  }
  return sell;
};
