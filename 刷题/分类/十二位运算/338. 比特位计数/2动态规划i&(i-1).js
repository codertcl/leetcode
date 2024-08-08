var countBits = function (n) {
    let res = Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        // i & (i - 1)即为i去掉最右边的1个1的结果
        res[i] = res[i & (i - 1)] + 1
    }
    return res
};
console.log(countBits(2))//[0,1,1]
console.log(countBits(5))//[0,1,1,2,1,2]
