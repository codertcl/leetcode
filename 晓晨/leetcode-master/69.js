//方法1
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = left + ((right - left) >> 1); //中间位置索引 x>>1 表示除以2并取整，缩小一下遍历的范围
    if (mid * mid <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

//方法2
var mySqrt = function (x) {
  let r = x;

  while (r ** 2 > x) r = ((r + x / r) / 2) | 0; //取整

  return r;
};
