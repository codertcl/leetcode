//方法1
var trap = function (height) {
  const n = height.length;
  if (n == 0) {
    //极端情况
    return 0;
  }

  const leftMax = new Array(n).fill(0); //初始化从左往右看的最大值数组
  leftMax[0] = height[0];
  for (let i = 1; i < n; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  const rightMax = new Array(n).fill(0); //初始化从右往左看的最大值数组
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let ans = 0;
  //循环数组，每个位置能接的雨水量就是这个位置左右最大值的较小者减去当前的高度
  for (let i = 0; i < n; ++i) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};

//方法2
var trap = function(height) {
  let ans = 0;
  const stack = [];//单调递减栈。存放的是下标哦
  const n = height.length;
  for (let i = 0; i < n; ++i) {//循环heights
      //当前柱子的高度大于栈顶柱子的 不断出栈
      while (stack.length && height[i] > height[stack[stack.length - 1]]) {
          const top = stack.pop();
          if (!stack.length) {//栈为空时 跳出循环
              break;
          }
          const left = stack[stack.length - 1];//拿到当前位置左边比当前柱子矮的位置
          const currWidth = i - left - 1;//计算宽度
          const currHeight = Math.min(height[left], height[i]) - height[top];//计算高度
          ans += currWidth * currHeight;//计算当面积
      }
      stack.push(i);//加入栈
  }
  return ans;
};

//方法3
var trap = function (height) {
  let ans = 0;
  let left = 0,
    right = height.length - 1; //初始化双指针
  let leftMax = 0,
    rightMax = 0; //左右两边最大高度
  while (left < right) {
    //循环双指针
    leftMax = Math.max(leftMax, height[left]); //左边最大值
    rightMax = Math.max(rightMax, height[right]); //右边最大值
    if (height[left] < height[right]) {
      //右边的柱子高于左边的柱子 计算这个位置的接水量 累加进结果
      ans += leftMax - height[left];
      ++left;
    } else {
      //左边的柱子高于或等于右边的柱子 计算这个位置的接水量 累加进结果
      ans += rightMax - height[right];
      --right;
    }
  }
  return ans;
};
