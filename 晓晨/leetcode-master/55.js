function canJump(nums) {
  let dp = new Array(nums.length).fill(false); //初始化dp
  dp[0] = true; //第一项能到达
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          //当前位置j能达到，并且当前位置j加上能到达的位置如果超过了i，那dp[i]更新为ture，便是i位置也可以到达
          if (dp[j] && nums[j] + j >= i) {
              dp[i] = true;
              break;
          }
      }
  }

  return dp[nums.length - 1];
}

var canJump = function (nums) {
  if (nums.length === 1) return true; //长度为1 直接就是终点
  let cover = nums[0]; //能覆盖的最远距离
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]); //当前覆盖距离cover和当前位置加能跳跃的距离中取一个较大者
    if (cover >= nums.length - 1) {
      //覆盖距离超过或等于nums.length - 1 说明能到达终点
      return true;
    }
  }
  return false; //循环完成之后 还没返回true 就是不能达到终点
};
