/**
 * @param {number} n
 * @return {[]}
 */

var climbStairs = function (n) {
    // let res = []
    // for (let i = 0; i <= 3; i++) {
    //     res.push(i)
    // }
    // for (let i = 4; i <= 45; i++) {
    //     res[i] = res[i - 1] + res[i - 2]
    // }
    // return res[n]

    let p = 0, q = 0, r = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};

console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))
console.log(climbStairs(45))
