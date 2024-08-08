var minPathSum = function (dp) {
    let row = dp.length, col = dp[0].length

    for (let i = 1; i < row; i++)//初始化第一列
        dp[i][0] += dp[i - 1][0]

    for (let j = 1; j < col; j++)//初始化第一行
        dp[0][j] += dp[0][j - 1]

    for (let i = 1; i < row; i++)
        for (let j = 1; j < col; j++)
            dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])//取上面和左边最小的

    return dp[row - 1][col - 1]
};

console.log(minPathSum([[1, 2, 3], [4, 5, 6]]))//12
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))//7
