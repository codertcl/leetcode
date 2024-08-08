var numSquares = function (n) {
    //动态规划  f[i] = Math.min(f[i], f[i - j * j] + 1) 1<=j<=Math.floor(Math.sqrt(i))
    //初始化n+1的数组
    const f = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        f[i] = i//最坏情况1+1+1...
        for (let j = 1; j * j <= i; j++) {
            f[i] = Math.min(f[i], f[i - j * j] + 1)
        }
    }
    return f[n]
}

console.log(numSquares(1))//1
console.log(numSquares(2))//2
console.log(numSquares(3))//3
console.log(numSquares(4))//1
console.log(numSquares(5))//2 [f(4)+f(1)]1+1
console.log(numSquares(6))//3 [f(4)+f(2)]1+2
console.log(numSquares(7))//4 [f(4)+f(3)]1+3
console.log(numSquares(8))//2 [f(4)+f(4)]1+4
console.log(numSquares(9))//1
console.log(numSquares(10))//2 [f(9)+f(1)]1+1
console.log(numSquares(11))//3 [f(9)+f(2)]1+2
console.log(numSquares(12))//4 [f(9)+f(3)]1+3
console.log(numSquares(13))//2 [f(9)+f(4)]1+1
console.log(numSquares(14))//3 [f(9)+f(5)]1+2
console.log(numSquares(15))//4 [f(9)+f(6)]1+3
console.log(numSquares(16))//1
