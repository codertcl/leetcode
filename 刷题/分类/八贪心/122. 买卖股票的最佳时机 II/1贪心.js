var maxProfit = function (prices) {
    let res = 0
    for (let i = 1; i < prices.length; i++) {
        ///贪心算法,在每次涨的前一天买入,第二天卖出,这样每次涨都获利
        if (prices[i] > prices[i - 1])
            res += prices[i] - prices[i - 1]
    }
    return res
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))//7
console.log(maxProfit([1, 2, 3, 4, 5]))//4
console.log(maxProfit([7, 6, 4, 3, 1]))//0
