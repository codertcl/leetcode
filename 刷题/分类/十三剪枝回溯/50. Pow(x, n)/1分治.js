/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1
    //n小于0
    if (n < 0)
        return 1 / myPow(x, -n)
    //n为奇数
    if (n % 2)
        return x * myPow(x, n - 1)
    //n为偶数
    return myPow(x * x, n / 2)
};

console.log(myPow(2, 10))
console.log(myPow(2, -2))
