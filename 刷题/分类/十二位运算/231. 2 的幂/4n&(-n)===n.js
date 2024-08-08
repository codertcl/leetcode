var isPowerOfTwo = function (n) {
    return n > 0 && (n & (-n)) === n
};


console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(-2147483648))
