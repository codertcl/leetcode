/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1
    }
    for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // obstacleGrid[i][j] === 1即到该位置方案为0
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i][j - 1] + dp[i - 1][j]
        }
    }
    return dp[m - 1][n - 1]
};

console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]))//1
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))//2
