/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) return n
    const dp = [0, 1]//dp初始状态
    let sum = null
    // 滚动数组 dp[i]只和dp[i-1]、dp[i-2]相关
    // 只维护长度为2的滚动数组，不断替换数组元素
    for (let i = 2; i <= n; i++) {
        //动态规划转移方程
        sum = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = sum
    }
    return sum
};

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
