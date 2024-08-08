var sortArrayByParity = function (nums) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        //从左边找到一个奇数
        while (left < right && nums[left] % 2 === 0) {
            left++
        }
        //从右边找一个偶数
        while (left < right && nums[right] % 2 === 1) {
            right--
        }
        if (left < right) [nums[left], nums[right]] = [nums[right], nums[left]]
    }
    return nums
};
console.log(sortArrayByParity([0]))
console.log(sortArrayByParity([1, 2, 3, 5, 4]))
