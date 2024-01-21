var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]); //按照起始位置排序
  let curr = intervals[0]; //当前区间curr初始化为intervals[0]
  let result = [];

  for (let interval of intervals) {
    //遍历intervals
    if (curr[1] >= interval[0]) {
      //当curr[1] >= interval[0]说明重叠
      curr[1] = Math.max(curr[1], interval[1]); //更新当前curr的右边界
    } else {
      result.push(curr); //不重叠 加入result
      curr = interval; //更新区间
    }
  }
  result.push(curr);
  return result;
};
