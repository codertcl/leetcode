/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            res = Math.max(res, prices[j] - prices[i])
        }
    }
    return res
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))//5
console.log(maxProfit([7, 6, 4, 3, 1]))//0
console.log(maxProfit([7, 6, 4, 3, 9]))//6
console.log(maxProfit([2, 4, 1]))//2
