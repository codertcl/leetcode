// let memo = new Array(3).fill(new Array(3).fill(0));//3
let memo = new Array(3).fill(0).map(() => new Array(3).fill(0));//6

var uniquePaths = function (m, n) {
    // let memo = new Array(m).fill(new Array(n).fill(0));
    // 定义：从 (0, 0) 到 (x, y) 有 dp(x, y) 条路径
    const dp = (x, y) => {
        if (x === 0 && y === 0) return 1;
        if (x < 0 || y < 0) return 0;
        if (memo[x][y] > 0) {
            console.log(memo)
            return memo[x][y];
        }
        // 状态转移方程：到达 (x, y) 的路径数等于到达 (x - 1, y) 和 (x, y - 1) 路径数之和
        return memo[x][y] = dp(x - 1, y) + dp(x, y - 1);
    };
    return dp(m - 1, n - 1);
};

// console.log(uniquePaths(0, 1))//0
// console.log(uniquePaths(1, 1))//1
// console.log(uniquePaths(3, 2))//3
debugger
// console.log(uniquePaths(3, 7))//28
// console.log(uniquePaths(7, 3))//28
console.log(uniquePaths(3, 3))//6
console.log(memo)
