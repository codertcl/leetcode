/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    // 我们可以直接循环检查给定整数 n 的二进制位的每一位是否为 1。
    // 具体代码中，当检查第 i 位时，我们可以让 n与 2^i
    // 进行与运算，当且仅当 n 的第 i 位为1 时，运算结果不为 0。
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        // 每次1左移i位后 结果为 1....i个0,即保证第一位为1
        // 0o0000000000000000000000000001011 &1 判断n的第1位是否为1
        // 0o0000000000000000000000000001011 &10 判断n的第2位是否为1
        // 0o0000000000000000000000000001011 &100 判断n的第3位是否为1
        // 0o0000000000000000000000000001011 &1000 判断n的第4位是否为1
        if ((n & (1 << i)) !== 0) {//让1不断左移 判断该位是否为1
            ret++;
        }
    }
    return ret;
};
console.log(hammingWeight(0o0000000000000000000000000001011))

//i<<j i<<j 数字i左移j位  左移数字i扩大j倍
// console.log(1 << 1)//2
// console.log(2 << 1)//4
// console.log(3 << 1)//6
// console.log(4 << 1)//8
// console.log(5 << 1)//10
// console.log(10 << 2)//40

// //数字i右移
// console.log(1 >> 1)//0
// console.log(2 >> 1)//1
// console.log(3 >> 1)//1
// console.log(4 >> 1)//2
// console.log(5 >> 1)//2
// console.log(10 >> 2)//2
// console.log(11 >> 2)//2
// console.log(12 >> 2)//3
