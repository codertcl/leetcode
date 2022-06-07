var findPeakElement = function (nums) {
    //处理边界条件 长度为1  长度大于1 第一个元素大于第二个元素
    if (nums.length === 1 || nums[0] > nums[1]) {
        return 0
    }

    // 长度为大于1 最后一个元素较大
    if (nums[nums.length - 2] < nums[nums.length - 1]) {
        return nums.length - 1
    }

    //处理中间情况
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i
        }
    }
};

console.log(findPeakElement([1, 2, 3, 1]))//2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))//1/5
console.log(findPeakElement([1, 2]))//1
