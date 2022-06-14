let superEggDrop = (k, n) => {
    let dp = Array.from(Array(k + 1), () => Array(n + 1).fill(0)) //初始dp数组
    for (let i = 1; i <= n; i++) {
        dp[1][i] = i
    }
    for (let i = 2; i <= k; i++) {
        let s = 1
        for (let j = 1; j <= n; j++) {
            dp[i][j] = j;
            while (s < j && dp[i - 1][s - 1] < dp[i][j - s]) ++s;
            dp[i][j] = Math.min(dp[i][j], Math.max(dp[i - 1][s - 1], dp[i][j - s]) + 1);
        }
    }
    return dp[k][n];
};
console.log(superEggDrop(1, 2))//2
console.log(superEggDrop(2, 6))//3
console.log(superEggDrop(3, 14))//4
