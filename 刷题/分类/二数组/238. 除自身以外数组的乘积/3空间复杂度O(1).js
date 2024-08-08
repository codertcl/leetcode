var productExceptSelf = function (nums) {
    let res = Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1]
    }
    let r = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        // 对于索引 i，左边的乘积为 res[i]，右边的乘积为 R
        res[i] = res[i] * r
        // R 需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到R上
        r *= nums[i]
    }
    return res
};

console.log(productExceptSelf([1, 2, 3, 4]))//[24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]))//[0,0,9,0,0]
