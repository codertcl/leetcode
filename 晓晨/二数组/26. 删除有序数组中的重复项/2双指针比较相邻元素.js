var removeDuplicates = function (nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    let fast = 1, slow = 1;
    while (fast < n) {
        //元素有序 相同元素就相邻 比较fast和上一个元素，不同则将fast放到slow对应位置
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};
console.log(removeDuplicates([1, 2, 2, 3]))
console.log(removeDuplicates([1, 2, 3]))
console.log(removeDuplicates([1, 1, 1, 2, 2]))
console.log(removeDuplicates([1, 1, 1]))


