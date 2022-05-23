/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = new Array(n).fill(0)
    dp[0] = 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // obstacleGrid[i][j] === 1即到该位置方案为0
            // 如果[0][0]为障碍物 则所有输出均为0 所以循环必须要从0开始循环
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0
            } else if (j > 0) {
                dp[j] = dp[j - 1] + dp[j]
            }
        }
    }
    return dp[n - 1]
};

console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]))//1
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))//2
