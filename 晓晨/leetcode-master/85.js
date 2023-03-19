var maximalRectangle = function (matrix) {
  if (matrix.length == 0) return 0;

  let res = 0;
  let heights = new Array(matrix[0].length).fill(0); //初始化heights数组
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] == "1") heights[col] += 1;
      else heights[col] = 0;
    } //求出每一层的 heights[] 然后传给84题的函数
    res = Math.max(res, largestRectangleArea(heights)); //更新一下最大矩形面积
  }
  return res;
};

const largestRectangleArea = (heights) => {
  let maxArea = 0;
  const stack = []; //单调递增栈 注意栈存的时下标
  heights = [0, ...heights, 0]; //在heights数组前后增加两个哨兵 用来清零单调递增栈里的元素
  for (let i = 0; i < heights.length; i++) {
    //当前元素对应的高度小于栈顶元素对应的高度时
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const stackTopIndex = stack.pop(); //出栈
      maxArea = Math.max(
        //计算面积 并更新最大面积
        maxArea,
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1) //高乘宽
      );
    }
    stack.push(i); //当前下标加入栈
  }
  return maxArea;
};
