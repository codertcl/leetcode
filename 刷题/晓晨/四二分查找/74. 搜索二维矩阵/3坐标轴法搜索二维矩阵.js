var searchMatrix = function (matrix, target) {
    if (!matrix.length) return false
    // 以二维数组左下角为原点，建立直角坐标轴。
    // 若当前数字大于了查找数，查找往上移一位。
    // 若当前数字小于了查找数，查找往右移一位。
    let x = matrix.length - 1, y = 0, n = matrix[0].length
    while (x >= 0 && y < n) {
        if (matrix[x][y] < target) {
            y++
        } else if (matrix[x][y] > target) {
            x--
        } else return true
    }
    return false
};
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));//false
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));//true
