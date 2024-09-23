/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    //初始化为0,其他相同元素异或后结果为0
    //初始的0再与多处出来的元素异或，结果就为该元素
    let res = 0
    for (const num of nums) {
        res ^= num
    }
    return res
};
console.log(singleNumber([2, 2, 0]))
console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(0 ^ 2)
console.log(0 ^ 4)
console.log(0 ^ 1)
