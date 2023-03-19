//dp[i]表示0-i能偷的最大金额
const rob = (nums) => {
  const len = nums.length;
  const dp = [nums[0], Math.max(nums[0], nums[1])]; //初始化dp数组的前两项
  for (let i = 2; i < len; i++) {
      //从第三个位置开始遍历
      //dp[i - 2] + nums[i] 表示偷当前位置，那么i-1的位置不能偷，而且需要加上dp[i-2],也就是前i-2个房间的金钱
      //dp[i - 1]表示偷当前位置，只偷i-1的房间
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[len - 1]; //返回最后最大的项
};

//状态压缩
var rob = function (nums) {
  if(nums.length === 1) return nums[0]
  let len = nums.length;
  let dp_0 = nums[0],
      dp_1 = Math.max(nums[0], nums[1]);
  let dp_max = dp_1;
  for (let i = 2; i < len; i++) {
      dp_max = Math.max(
          dp_1, //不抢当前家
          dp_0 + nums[i] //抢当前家
      );
      dp_0 = dp_1; //滚动交换变量
      dp_1 = dp_max;
  }
  return dp_max;
};

