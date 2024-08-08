var productExceptSelf = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let multi = 1
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) multi *= nums[j]
        }
        //去除-0
        res.push(multi === -0 ? 0 : multi)
    }
    return res
};

console.log(productExceptSelf([1, 2, 3, 4]))//[24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]))//[0,0,9,0,0]
