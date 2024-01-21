const PredictTheWinner = (nums) => {
  // helper：基于从i到j的数组，当前选择的玩家所能赢对方的分数
  const helper = (i, j) => { // i，j是两端的索引
    if (i === j) {   // 此时只有一种选择，选的人赢对方nums[i]，且没有剩余可选，结束递归
      return nums[i];
    }
    const pickI = nums[i] - helper(i + 1, j); // 选择左端，获得nums[i]，之后输掉helper(i+1,j)分
    const pickJ = nums[j] - helper(i, j - 1); // 选择右端，获得nums[j]，之后输掉helper(i,j-1)分
    return Math.max(pickI, pickJ);            // 返回较大者，即在[i,j]数组游戏中胜过对方的分数
  };

  return helper(0, nums.length - 1) >= 0; // 基于整个数组玩这个游戏，玩家1先手，>=0就获胜
};

console.log(PredictTheWinner( [1,5,233,7]))
console.log(PredictTheWinner( [1,5,2]))