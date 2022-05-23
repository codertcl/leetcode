/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    //存储之前计算过的结果
    const memo = {}
    ////不能通过该方式进行预先设置值 否则下面if (memo[x]) return memo[x]
    // memo[0]为0 if判断为false继续下面的  所以必须判断x为1或0 返回1/0
    // memo[0] = 0
    // memo[1] = 1
    //内部递归函数
    const helper = (x) => {
        if (memo[x]) return memo[x]
        if (x === 0) return 0
        if (x === 1) return 1
        //进行递归，求解当前结果 并存储到memo中
        memo[x] = helper(x - 2) + helper(x - 1)
        return memo[x] //返回计算结果
    }
    return helper(n)
};

////map实现
// var fib = function (n) {
//     const memo = new Map()
//     memo.set(0, 0)
//     memo.set(1, 1)
//     const fn = (x) => {
//         if (memo.has(x)) return memo.get(x)
//         memo.set(x, fn(x - 1) + fn(x - 2))
//         return memo.get(x)
//     }
//     return fn(n)
// };
console.log(fib(0))//0
console.log(fib(1))//1
console.log(fib(2))//1
console.log(fib(3))//2
console.log(fib(4))//3
console.log(fib(5))//5
console.log(fib(6))//8
