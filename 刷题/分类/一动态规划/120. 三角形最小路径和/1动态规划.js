/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
    const h = triangle.length;
    // 初始化dp数组
    const dp = new Array(h);
    for (let i = 0; i < h; i++) {
        dp[i] = new Array(triangle[i].length);
    }

    ////自底而上遍历
    for (let i = h - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) { //同一层的
            if (i === h - 1) {  // base case 最底层
                dp[i][j] = triangle[i][j];
            } else { // 状态转移方程，上一层由它下面一层计算出
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
            }
        }
    }
    return dp[0][0];
};
console.log(minimumTotal([[1]]))//1
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]))//-1
console.log(minimumTotal([[-1], [-2, -3]]))//-4
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))//11
