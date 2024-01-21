var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length,
    n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); //初始化dp
  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1; //text1与text2字符相同时 最长公共子序列长度+1
      } else {
        //text1与text2字符不同时 返回text1或text2向前减少一位之后的最长公共子序列中的较大者
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};
