var sortArrayByParityII = function (nums) {
    let odd = [], even = [], res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) odd.push(nums[i])
        else even.push(nums[i])
    }
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) res.push(odd[i / 2])
        else res.push(even[(i - 1) / 2])
    }
    return res
};

console.log(sortArrayByParityII([1, 0]))
console.log(sortArrayByParityII([1, 2, 3, 5, 4, 6]))
