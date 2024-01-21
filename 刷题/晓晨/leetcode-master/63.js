var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array(m)
    .fill()
    .map((item) => Array(n).fill(0)); //初始dp数组

  for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
    //初始行
    dp[i][0] = 1;
  }

  for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
    //初始列
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      //遇到障碍直接返回0
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

//状态压缩
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = Array(n).fill(0); //用0填充，因为现在有障碍物，当前dp数组元素的值还和obstacleGrid[i][j]
  dp[0] = 1; //第一列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] == 1) {
        //注意条件，遇到障碍物dp[j]就变成0，这里包含了第一列的情况
        dp[j] = 0;
      } else if (j > 0) {
        //只有当j>0 不是第一列了才能取到j - 1
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp[n - 1];
};
