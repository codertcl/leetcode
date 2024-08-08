var sortArrayByParityII = function (nums) {
    for (let i = 0; i < nums.length; i = i + 2) {
        let j = 1;
        // //i(偶数位置)元素为奇数
        // if (nums[i] % 2 === 1) {
        //     //则从j(奇数位置找一个偶数) 二者进行交换
        //     while (nums[j] % 2 === 1) {
        if (nums[i] & 1) {//循环偶数位置 如果遇到了奇数
            while (nums[j] & 1) {//循环奇数位置 如果遇到了第一个偶数
                j += 2
            }
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    return nums
};

console.log(sortArrayByParityII([1, 0]))
console.log(sortArrayByParityII([1, 2, 3, 5, 4, 6]))
