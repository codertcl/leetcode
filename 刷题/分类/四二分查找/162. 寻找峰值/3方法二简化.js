var findPeakElement = function (nums) {
    // 找到一个num[i]>num[i+1] 找到该元素的时候 num[i]已经大于了num[i-1]
    //既满足了峰值条件，否则就会返回i-1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return i
        }
    }
    return nums.length - 1
};

console.log(findPeakElement([1, 2, 3, 1]))//2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))//1/5
console.log(findPeakElement([1, 2]))//1
