var hammingWeight = function (n) {
    let ret = 0;
    while (n) {
        ret++;
        // n-1 结果即为n的最右侧的1及右边的元素全部取反
        // n=n&n-1后,n的最右侧的1及右边的元素全部变成0,最右边1及左边的元素不变
        // 如果不为0,则表示还有1,ret++,对n的一次操作去除1个1
        n &= n - 1
    }
    return ret;
};
console.log(hammingWeight(0o0000000000000000000000000001011))
