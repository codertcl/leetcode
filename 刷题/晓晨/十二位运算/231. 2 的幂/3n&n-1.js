var isPowerOfTwo = function (n) {
    //为2的幂次 则只有一个1  1 10 1000即1开头 若干个0
    //n&(n-1)能消除1,n-1即n的最右侧的1及右边的元素全部变成0,最右边1及左边的元素不变
    //再进行位与,若为2的幂次则二者每一位都不一样,结果为0
    return n > 0 && (n & (n - 1)) === 0
};


console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(-2147483648))
