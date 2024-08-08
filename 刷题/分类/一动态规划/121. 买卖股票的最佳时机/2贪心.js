/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0, low = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < prices.length; i++) {
        //记录当前最小值
        low = Math.min(low, prices[i])
        //比较当前计算得到的最大利润和当前卖出的利润
        res = Math.max(res, prices[i] - low)
    }
    return res
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))//5
console.log(maxProfit([7, 6, 4, 3, 1]))//0
console.log(maxProfit([7, 6, 4, 3, 9]))//6
console.log(maxProfit([2, 4, 1]))//2
