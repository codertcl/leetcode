let superEggDrop = (K, N) => {
    let dp = Array(K + 1).fill(0)
    let cnt = 0
    while (dp[K] < N) {
        cnt++
        for (let i = K; i > 0; i--) {
            dp[i] = dp[i - 1] + dp[i] + 1
        }
    }
    return cnt
};
console.log(superEggDrop(1, 2))//2
console.log(superEggDrop(2, 6))//3
console.log(superEggDrop(3, 14))//4
