/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) return n
    let res = 0, prev1 = 0, prev2 = 1
    for (let i = 2; i <= n; i++) {
        //动态规划转移方程
        res = prev2 + prev1
        prev1 = prev2
        prev2 = res
    }
    return res
};

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
