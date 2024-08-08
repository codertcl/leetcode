var findPeakElement = function (nums) {
    let index = 0
    //寻找最大值 就一定满足条件(题目说了两个相邻元素不相等)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[index]) {
            index = i
        }
    }
    return index
};

console.log(findPeakElement([1, 2, 3, 1]))//2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))//1/5
console.log(findPeakElement([1, 2]))//1
