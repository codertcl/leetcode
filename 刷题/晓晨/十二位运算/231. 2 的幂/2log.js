var isPowerOfTwo = function (n) {
    if (n <= 0) return false
    let a = Math.log2(n)
    //判断一个数是否是整数
    //1:利用Math.floor() Math.ceil() Math.round()和原来数进行比较
    // if (Math.floor(a) === a) return true
    //2:利用位运算 (整数与0进行|或运算 结果为本身 小数则结果为小数取整(绝对值更小的方向))
    // if ((a | 0) === a) return true
    //3:对1取余
    // if(a%1===0) return true

    // 4:ES6 Number.isInteger
    // if(Number.isInteger(a)) return true

    // 5:parseInt 转换为十进制数
    if (parseInt(a.toString(), 10) === a) return true
    return false
};


console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(-2147483648))
