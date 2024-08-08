/**
 * @param {number} n
 * @return {[]}
 */

var climbStairs = function (n) {
    //动态规划 dp[i]=dp[i-1]+dp[i-2] 记忆化数组
    let res = []
    for (let i = 0; i <= 3; i++) {
        res.push(i)
    }
    for (let i = 4; i <= 45; i++) {
        res[i] = res[i - 1] + res[i - 2]
    }
    return res[n]
};

console.log(climbStairs(1))//1
console.log(climbStairs(2))//2
console.log(climbStairs(3))//3
console.log(climbStairs(4))//5
console.log(climbStairs(5))//8
console.log(climbStairs(6))//13
console.log(climbStairs(45))//1836311903
