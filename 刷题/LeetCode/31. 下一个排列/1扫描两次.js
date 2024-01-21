const nextPermutation = (nums) => {
    let i = nums.length - 2;
    let j = nums.length - 1;
    let k = nums.length - 1;

    //从后向前找 nums[i] < nums[j]
    while (i >= 0 && nums[i] >= nums[j] ) {
        i--;
        j--;
    }

    // 未找到则说明数组降序排列 结果即为数组逆序即可
    if (i < 0) return nums.reverse();

    // 从最右边找 nums[i] < nums[k]
    while (nums[k] <= nums[i]) {
        k--;
    }

    [nums[i], nums[k]] = [nums[k], nums[i]];
    // 区间 [j, nums.length - 1] 为降序，改为升序
    for (let l = nums.length - 1; j < l; ++j, --l) {
        [nums[j], nums[l]] = [nums[l], nums[j]];
    }

    return nums;
};
