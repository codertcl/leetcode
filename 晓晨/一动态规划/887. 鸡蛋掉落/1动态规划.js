/**
 * @param {number} k 鸡蛋数量
 * @param {number} n  楼层数
 * @return {number}
 */
// var superEggDrop = function (k, n) {
//     //dp[i][j] 有i个鸡蛋，j次扔鸡蛋的测得的最多楼层
//     // let dp = Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0))
//     // let dp = new Array(k + 1).fill(new Array(n + 1).fill(0)) //初始dp数组
//     let dp = Array.from(Array(k + 1), () => Array(n + 1).fill(0)) //初始dp数组
//
//     //必须先从楼层数开始遍历 内层循环为鸡蛋数
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= k; j++) {
//             /**
//              *二分法   碎了  j-1 i-1 ->下面的     没碎 j i -1  -> 上面的
//              * j-1个鸡蛋i-1次测的楼层 +  j个鸡蛋i-1次测的楼层  + 1
//              */
//             dp[j][i] = 1 + dp[j - 1][i - 1] + dp[j][i - 1]
//             if (dp[j][i] >= n) {
//                 console.log(dp[j][i], i, j)
//                 return i
//             }
//         }
//     }
//     return n
// };

function superEggDrop(k, n) {
    const dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0));
    let m = 0;
    while (dp[k][m] < n) {
        m++;
        for (let i = 1; i <= k; i++) {
            dp[i][m] = dp[i][m - 1] + dp[i - 1][m - 1] + 1;
        }
    }
    return m;
};
console.log(superEggDrop(1, 2))//2
console.log(superEggDrop(2, 6))//3
console.log(superEggDrop(3, 14))//4
