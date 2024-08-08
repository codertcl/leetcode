var sortArrayByParity = function (nums) {
    // 偶数的二进制最低位为0,&1结果为0  奇数&1结果为1
    // 作差后返回0,则第一个参数a在前,第二个参数在后
    // 箭头函数内返回值小于0,第一个参数在前,否则第二个参数在后
    return nums.sort((a, b) => (a & 1) - (b & 1))
};
console.log(sortArrayByParity([0]))
console.log(sortArrayByParity([1, 2, 3, 5, 4]))
