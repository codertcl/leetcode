var minSubArrayLen = function (target, nums) {
    let min = Infinity
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i], count = 1
        if (sum >= target) min = Math.min(count, min)
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            count++
            if (sum >= target) min = Math.min(count, min)
        }
    }
    return min === Infinity ? 0 : min
};
console.log(minSubArrayLen(2, [2, 3, 1, 2, 4, 3]))//1
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))//2
console.log(minSubArrayLen(4, [1, 4, 4]))//1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))//0
