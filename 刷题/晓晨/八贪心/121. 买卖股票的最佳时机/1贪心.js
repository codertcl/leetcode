/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let low = Number.MAX_SAFE_INTEGER, max = 0;
    for (const price of prices) {
        low = Math.min(low, price);
        max = Math.max(max, price - low);
    }
    return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])) //5
console.log(maxProfit([7, 1, 6, 0, 6, 4])) //6
console.log(maxProfit([7, 6, 4, 3, 1])) //0