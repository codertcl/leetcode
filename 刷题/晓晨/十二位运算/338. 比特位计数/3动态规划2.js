var countBits = function (n) {
    const bits = Array(n + 1).fill(0)
    let highBit = 0;
    for (let i = 1; i <= n; i++) {
        if ((i & (i - 1)) === 0) {
            //highBit为当前找到的最大的2的幂次数
            highBit = i;
        }
        //i即只比highBit的1多1个
        bits[i] = bits[i - highBit] + 1;
    }
    return bits;
};
console.log(countBits(2))//[0,1,1]
console.log(countBits(5))//[0,1,1,2,1,2]
