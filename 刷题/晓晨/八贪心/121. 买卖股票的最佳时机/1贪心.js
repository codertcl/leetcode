/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0, low = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        low = Math.min(low, prices[i]);
        res = Math.max(res, prices[i] - low)
    }
    return res;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])) //5
console.log(maxProfit([7, 1, 6, 0, 6, 4])) //6
console.log(maxProfit([7, 6, 4, 3, 1])) //0