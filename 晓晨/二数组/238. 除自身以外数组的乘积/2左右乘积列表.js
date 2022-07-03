var productExceptSelf = function (nums) {
    //right初始化为大小的n,因为需要从后往前计算
    let res = [], left = [1], right = Array(nums.length).fill(1)
    //left[i]为0——i-1下标的元素之积(不包括nums[i])
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }
    //right[i]为i+1到最后元素之积(不包括nums[i])
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]
    }
    //计算其左边和右边元素之积
    for (let i = 0; i < nums.length; i++) {
        let a = left[i] * right[i]
        res.push(a === -0 ? 0 : a)
    }
    return res
};

console.log(productExceptSelf([1, 2, 3, 4]))//[24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]))//[0,0,9,0,0]
