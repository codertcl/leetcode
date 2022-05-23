var uniquePaths = function (m, n) {
    //方式一 正确结果
    // let memo = new Array(m).fill(0).map(() => new Array(n).fill(0));
    //方式二 错误结果
    let memo = new Array(m).fill(new Array(n).fill(0));
    // 定义：从 (0, 0) 到 (x, y) 有 dp(x, y) 条路径
    const dp = (x, y) => {
        if (x === 0 && y === 0) return 1;
        if (x < 0 || y < 0) return 0;
        if (memo[x][y] > 0) return memo[x][y];
        // 状态转移方程：到达 (x, y) 的路径数等于到达 (x - 1, y) 和 (x, y - 1) 路径数之和
        return memo[x][y] = dp(x - 1, y) + dp(x, y - 1);
    };
    return dp(m - 1, n - 1);
};

console.log(uniquePaths(0, 1))//0
console.log(uniquePaths(1, 1))//1
console.log(uniquePaths(3, 2))//3
debugger
console.log(uniquePaths(3, 7))//28
console.log(uniquePaths(7, 3))//28
console.log(uniquePaths(3, 3))//6

// console.log(new Array(3).fill(0).map(() => new Array(7).fill(0)));
// console.log(new Array(3).fill(new Array(7).fill(0)));


//判断数组是否一致

// let memo = new Array(3).fill(0).map(() => new Array(2).fill(0));
// let memo2 = new Array(3).fill(new Array(2).fill(0));
// for (let i = 0; i < 3; i++) {
//     if (memo[i].length !== memo2[i].length)
//         console.log('false')
//     for (let j = 0; j < 2; j++) {
//         if (memo[i][j] !== memo2[i][j])
//             console.log(false, 2)
//     }
// }
