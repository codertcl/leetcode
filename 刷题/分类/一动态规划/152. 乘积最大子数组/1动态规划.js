/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let ans = nums[0], min = nums[0], max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let m = max, n = min;
        max = Math.max(m * nums[i], n * nums[i], nums[i])
        //存储最小值，当min为负数时，便于遇到下一个数位负数时，能够负负得正，得到更大的值
        min = Math.min(m * nums[i], n * nums[i], nums[i])
        ans = Math.max(max, ans)
    }
    return ans
};

console.log(maxProduct([2, 3, -2, 4]))//6
console.log(maxProduct([-2, 0, -1]))//0
