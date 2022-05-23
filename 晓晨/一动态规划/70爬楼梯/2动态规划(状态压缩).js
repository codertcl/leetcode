/**
 * @param {number} n
 * @return {[]}
 */

var climbStairs = function (n) {
    //dp[i]=dp[i-1]+dp[i-2] 状态压缩
    let p = 0, q = 0, r = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};

console.log(climbStairs(1))//1
console.log(climbStairs(2))//2
console.log(climbStairs(3))//3
console.log(climbStairs(4))//5
console.log(climbStairs(5))//8
console.log(climbStairs(6))//13
console.log(climbStairs(45))//1836311903
