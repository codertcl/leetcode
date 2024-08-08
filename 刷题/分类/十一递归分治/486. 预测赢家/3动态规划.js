const PredictTheWinner = (nums) => {
  const memo = new Array(nums.length).fill(0).map(() => new Array(nums.length))
  const len = nums.length
  for (let i = 0; i < nums.length; i++) {
    memo[i][i] = nums[i]
  }
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      const pickI = nums[i] - memo[i + 1][j];
      const pickJ = nums[j] - memo[i][j - 1];
      memo[i][j] = Math.max(pickI, pickJ);
    }
  }
  return memo[0][nums.length - 1] >= 0; // 基于整个数组玩这个游戏，玩家1先手，>=0就获胜
};

console.log(PredictTheWinner( [1,5,233,7]))
console.log(PredictTheWinner( [1,5,2]))