/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // let dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0))
    let dp = Array.from(Array(word1.length + 1), () =>
        Array(word2.length + 1).fill(0)
    );
    /* base case 是i走完word1或j走完word2，可以直接返回另一个字符串剩下的长度 */
    // j走完word2 如果i还没走完word1，那么只能用删除操作把word1缩短为word2,也就是直接返回另一个字符串剩下的长度
    for (let i = 1; i <= word1.length; i++) {
        dp[i][0] = i
    }
    // 同理  如果i走完word1时j还没走完了word2，那就只能用插入操作把word2剩下的字符全部插入word1
    for (let j = 1; j <= word2.length; j++) {
        dp[0][j] = j
    }
    //注意从1开始循环
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            //由于字符串从1开始循环,所以word取字符下标-1
            if (word2[j - 1] !== word1[i - 1]) {
                ////dp[i-1][j] + 1：对应删除
                ////dp[i][j-1] + 1：对应新增
                //// dp[i-1][j-1] + 1：对应替换操作
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
            } else {
                dp[i][j] = dp[i - 1][j - 1]
            }
        }
    }
    return dp[word1.length][word2.length]
};

console.log(minDistance("horse", "ros"))//3
console.log(minDistance("intention", "execution"))//5
