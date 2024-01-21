/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
    // n && (n += sumNums(n - 1))
    // return n
    return n && n + sumNums(n - 1);
};
console.log(sumNums(1))
console.log(sumNums(2))
console.log(sumNums(3))
console.log(sumNums(4))
