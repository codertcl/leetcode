//方法1
var maxSubArray = function (nums) {
  const dp = [];
  let res = (dp[0] = nums[0]); //初始化状态
  for (let i = 1; i < nums.length; ++i) {
    dp[i] = nums[i];
    if (dp[i - 1] > 0) {
      //前面的状态是正数 则加上
      dp[i] += dp[i - 1];
    }
    res = Math.max(res, dp[i]); //更新最大值
  }
  return res;
};

//状态压缩
var maxSubArray = function (nums) {
  let pre = 0,
    maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

//方法2
function crossSum(nums, left, right, mid) {
  if (left === right) {//左右相等 返回左边的值
      return nums[left];
  }

  let leftMaxSum = Number.MIN_SAFE_INTEGER;//左边最大值初始化
  let leftSum = 0;
  for (let i = mid; i >= left; --i) {
      leftSum += nums[i];
      leftMaxSum = Math.max(leftMaxSum, leftSum);//更新左边最大子序和
  }

  let rightMaxSum = Number.MIN_SAFE_INTEGER;
  let rightSum = 0;
  for (let i = mid + 1; i <= right; ++i) {
      rightSum += nums[i];
      rightMaxSum = Math.max(rightMaxSum, rightSum);//更新右边最大子序和
  }

  return leftMaxSum + rightMaxSum;//返回左右合并之后的最大子序和
}

function _maxSubArray(nums, left, right) {
  if (left === right) {//递归终止条件
      return nums[left];
  }

  const mid = Math.floor((left + right) / 2);
  const lsum = _maxSubArray(nums, left, mid);//左边最大子序和
  const rsum = _maxSubArray(nums, mid + 1, right);//右边最大子序和
  const cross = crossSum(nums, left, right, mid);//合并左右的之后的最大子序和

  return Math.max(lsum, rsum, cross);//返回3中子序和中最大的
}

var maxSubArray = function(nums) {
  return _maxSubArray(nums, 0, nums.length - 1);
};

