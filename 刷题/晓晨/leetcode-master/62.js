var uniquePaths = function (m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0)); //初始dp数组
  for (let i = 0; i < m; i++) {
    //初始化列
    f[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    //初始化行
    f[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }
  return f[m - 1][n - 1];
};

//状态压缩
var uniquePaths = function (m, n) {
  let cur = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let r = 1; r < n; r++) {
      cur[r] = cur[r - 1] + cur[r];
    }
  }
  return cur[n - 1];
};

