/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//     //dp[i][j]=dp[i-1][j]+dp[i][j-1]
//     //创建一个大小为(m+1)*(n+1)的数组 第0行和第0列设置为0
//     let arr = new Array(m + 1).fill(new Array(n + 1).fill(0))
//     arr[1][1] = 1//初始化 mn均为1只有一种解 作为后续累加的初始值
//     //填充数组右下角m*n的矩形部分
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (!(i === 1 && j === 1))//避免修改了a[1][1]
//                 arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
//         }
//     }
//     return arr[m][n]
// };

var uniquePaths = function (m, n) {
    // const f = new Array(m).fill(0).map(() => new Array(n).fill(0)); //初始dp数组
    const f = new Array(m).fill(new Array(n).fill(0)) //初始dp数组
    for (let i = 0; i < m; i++) {
        //初始化列
        f[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        //初始化行
        f[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
    }
    return f[m - 1][n - 1];
};

console.log(uniquePaths(0, 1))//0
console.log(uniquePaths(1, 1))//1
console.log(uniquePaths(3, 2))//3
console.log(uniquePaths(3, 7))//28
console.log(uniquePaths(7, 3))//28
console.log(uniquePaths(3, 3))//6
