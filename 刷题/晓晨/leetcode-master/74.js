var searchMatrix = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;
  let low = 0,
    high = m * n - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    const x = matrix[Math.floor(mid / n)][mid % n]; //一维坐标转换成二维坐标
    if (x < target) {
      low = mid + 1;
    } else if (x > target) {
      high = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
