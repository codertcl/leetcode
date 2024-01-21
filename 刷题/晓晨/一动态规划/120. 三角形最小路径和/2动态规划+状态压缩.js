/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
    const dp=triangle[triangle.length - 1]
    // 从倒数第二行开始迭代
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
            // console.log(dp)
        }
        // console.log('------------------')
    }
    return dp[0];
};
console.log(minimumTotal([[1]]))//1
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]))//-1
console.log(minimumTotal([[-1], [-2, -3]]))//-4
debugger
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))//11
