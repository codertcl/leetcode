/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//mid值转换为二维坐标进行二分
var searchMatrix = function (matrix, target) {
    let m = matrix.length, n = matrix[0].length
    let low = 0, high = m * n - 1
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)
        //由于mid的计算已经是下标值 所以求解第二维坐标值不用-1
        const tmp = matrix[Math.floor(mid / n)][mid % n]
        if (tmp < target) {
            low = mid + 1
        } else if (tmp > target) {
            high = mid - 1
        } else return true
    }
    return false
};
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));//false
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));//true
