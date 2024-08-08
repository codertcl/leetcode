var sortArrayByParity = function (nums) {
    let res = [], n = nums.length, index = 0
    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) res[index++] = nums[i]
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] % 2) res[index++] = nums[i]
    }
    return res
};
console.log(sortArrayByParity([0]))
console.log(sortArrayByParity([1, 2, 3, 5, 4]))
