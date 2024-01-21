var countBits = function (n) {
    const bits = Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        bits[i] = bits[i >>> 1] + i % 2;
    }
    return bits;
};
console.log(countBits(2))//[0,1,1]
console.log(countBits(5))//[0,1,1,2,1,2]
