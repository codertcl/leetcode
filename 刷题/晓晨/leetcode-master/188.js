const maxProfit = function (k, prices) {
  let n = prices.length;

  let profit = new Array(k);
  // 初始化k次交易买入卖出的利润
  for (let j = 0; j <= k; j++) {
    profit[j] = {
      buy: -prices[0],
      sell: 0,
    };
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      //122题可以交易无数次，188交易k次，所以直接在加一层k循环就可以
      profit[j] = {
        sell: Math.max(profit[j].sell, profit[j].buy + prices[i]),
        buy: Math.max(profit[j].buy, profit[j - 1].sell - prices[i]),
      };
    }
  }
  return profit[k].sell; //返回第k次卖出之后的最大利润
};
