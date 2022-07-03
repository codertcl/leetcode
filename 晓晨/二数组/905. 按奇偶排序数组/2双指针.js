var sortArrayByParity = function (nums) {
    let res = [], n = nums.length
    let left = 0, right = n - 1
    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) res[left++] = nums[i]
        else res[right--] = nums[i]
    }
    return res
};
console.log(sortArrayByParity([0]))
console.log(sortArrayByParity([1, 2, 3, 5, 4]))
