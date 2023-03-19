var climbStairs = function (n) {
  const memo = [];
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 2] + memo[i - 1]; //所以到第n阶台阶可以从第n-2或n-1上来
  }
  return memo[n];
};

//状态压缩
var climbStairs = (n) => {
  let prev = 1;
  let cur = 1;
  for (let i = 2; i < n + 1; i++) {
    [prev, cur] = [cur, prev + cur];
    // const temp = cur;   // 暂存上一次的cur
    // cur = prev + cur;   // 当前的cur = 上上次cur + 上一次cur
    // prev = temp;        // prev 更新为 上一次的cur
  }
  return cur;
};
