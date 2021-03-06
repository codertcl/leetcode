/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    let m = matrix.length, n = matrix[0].length
    this.preSum = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            this.preSum[i][j] =
                this.preSum[i - 1][j] + this.preSum[i][j - 1] +
                matrix[i - 1][j - 1] - this.preSum[i - 1][j - 1];
        }
    }
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.preSum[row2 + 1][col2 + 1] + this.preSum[row1][col1] - this.preSum[row2 + 1][col1] - this.preSum[row1][col2 + 1]
};

var obj = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]])
console.log(obj.sumRegion(1, 1, 2, 3));//14
console.log(obj.sumRegion(1, 2, 2, 4));//12

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
