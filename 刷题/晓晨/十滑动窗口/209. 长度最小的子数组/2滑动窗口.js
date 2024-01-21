var minSubArrayLen = function (target, nums) {
    let left = 0, right = 0, sum = 0, min = Infinity
    while (right < nums.length) {
        let tmp = nums[right++]
        sum += tmp
        while (sum >= target) {
            min = Math.min(min, right - left)
            sum -= nums[left++]
        }
    }
    return min === Infinity ? 0 : min
};
console.log(minSubArrayLen(2, [2, 3, 1, 2, 4, 3]))//1
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))//2
console.log(minSubArrayLen(4, [1, 4, 4]))//1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))//0
