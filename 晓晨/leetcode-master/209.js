var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  let l = (r = sum = 0),
    res = len + 1; //最大的窗口不会超过自身长度
  while (r < len) {
    sum += nums[r++]; //扩大窗口
    while (sum >= target) {
      res = res < r - l ? res : r - l; //更新最小值
      sum -= nums[l++]; //缩小窗口
    }
  }
  return res > len ? 0 : res;
};
