//状态压缩
var uniquePaths = function (m, n) {
    let cur = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        // 原来dp[i][j]=dp[i-1][j]+dp[i][j-1]等于dp[j]+=dp[j-1].
        // 其中dp[j]就相当于dp[i-1][j]，
        // dp[i][j-1]就相当于dp[j-1].就从二维压缩为一维了
        // 简单说就是压缩的维度是循环计算的历史。因为状态转移方程只跟前一行和前一列的相邻两个值有关
        // 在循环嵌套里计算的时候,前一行的值就是上一个循环(c[r-1])的计算结果,只需要考录列这一个维度就行了
        for (let j = 1; j < n; j++) {
            cur[j] = cur[j - 1] + cur[j];
        }
    }
    return cur[n - 1];
};

debugger
console.log(uniquePaths(3, 3))//6
console.log(uniquePaths(3, 2))//3
console.log(uniquePaths(3, 7))//28
console.log(uniquePaths(7, 3))//28
