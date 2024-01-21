//方法1
var maxProfit = function (prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(0)); //初始化状态数组
  (dp[0][0] = 0), (dp[0][1] = -prices[0]); //3.定义初始值
  for (let i = 1; i < n; ++i) {
    //1.确定状态
    //2.推导状态转移方程
    //当前没持有股票，可由前一天的两种状态转移过了，1是前一天没持有，今天不动，2是前一天持有，今天卖掉，求这两种情况的较大值
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    //当前持有股票，可由前一天的两种状态转移过了，1是前一天持有，今天不动，2是前一天没持有，今天买入，求这两种情况的较大值
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  //4.确定输出值
  return dp[n - 1][0]; //返回第n-1天的最大值
};

//空间压缩
var maxProfit = function (prices) {
  const n = prices.length;
  let dp0 = 0,
    dp1 = -prices[0];
  for (let i = 1; i < n; ++i) {
    let newDp0 = Math.max(dp0, dp1 + prices[i]);
    let newDp1 = Math.max(dp1, dp0 - prices[i]);
    dp0 = newDp0;
    dp1 = newDp1;
  }
  return dp0;
};

//语意化
var maxProfit = function (prices) {
  let n = prices.length;
  let sell = 0;
  let buy = -prices[0];
  for (let i = 1; i < n; i++) {
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, sell - prices[i]);
  }
  return sell;
};

//方法2
//贪心
var maxProfit = function (prices) {
  let ans = 0;
  let n = prices.length;
  for (let i = 1; i < n; ++i) {
    //今天价格和昨天的差值是否为正，如果为正累加进去，为负则加0
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
};
