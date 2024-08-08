var sortArrayByParityII = function (nums) {
    let res = [], odd = 1, even = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            //even表示偶数元素的下标 0 2 4,将遍历到的偶数分别放到对应位置
            //下面的奇数同理
            res[even] = nums[i]
            even += 2
        } else {
            res[odd] = nums[i]
            odd += 2
        }
    }
    return res
};

console.log(sortArrayByParityII([1, 0]))
console.log(sortArrayByParityII([1, 2, 3, 5, 4, 6]))
