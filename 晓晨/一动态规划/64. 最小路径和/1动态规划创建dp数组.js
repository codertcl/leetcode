/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length
    let dp = Array.from(Array(m), () => Array(n).fill(Infinity))
    //初始化左上角对应dp值
    dp[0][0] = grid[0][0]
    //初始化第一行dp值
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    //初始化第一列dp值
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            //动态转移方程 左边和上边dp值小的+grid[i][j]
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    return dp[m - 1][n - 1]
};

console.log(minPathSum([[1, 2, 3], [4, 5, 6]]))//12
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))//7
