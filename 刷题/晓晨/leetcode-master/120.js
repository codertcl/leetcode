const minimumTotal = (triangle) => {
  const h = triangle.length;
  // 初始化dp数组
  const dp = new Array(h);
  for (let i = 0; i < h; i++) {
    dp[i] = new Array(triangle[i].length);
  }

  for (let i = h - 1; i >= 0; i--) { // 自底而上遍历
    for (let j = 0; j < triangle[i].length; j++) { // 同一层的
      if (i == h - 1) {  // base case 最底层
        dp[i][j] = triangle[i][j];  
      } else { // 状态转移方程，上一层由它下面一层计算出
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  return dp[0][0];
};


//状态压缩
const minimumTotal = (triangle) => {
  const bottom = triangle[triangle.length - 1];
  const dp = new Array(bottom.length);
  // base case 是最后一行
  for (let i = 0; i < dp.length; i++) {
    dp[i] = bottom[i];
  }
  // 从倒数第二列开始迭代
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};
