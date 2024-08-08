/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) return n
    const dp = [0, 1]//dp初始状态
    for (let i = 2; i <= n; i++) {
        //动态规划转移方程
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
