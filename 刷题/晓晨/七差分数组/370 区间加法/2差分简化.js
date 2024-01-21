function getModifiedArray(length, updates) {
    let nums = Array(length).fill(0)
    //注意update中前两个元素从0开始
    for (const update of updates) {
        nums[update[0]] += update[2]
        if (update[1] + 1 < length) {
            nums[update[1] + 1] -= update[2]
        }
    }
    for (let i = 1; i < length; i++) {
        nums[i] += nums[i - 1]
    }
    return nums;
}

console.log(getModifiedArray(3, [[1, 2, 2], [0, 2, -1], [0, 2, 1]]));
