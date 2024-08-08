var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = nums.lastIndexOf(nums[i])
        if (index !== -1 && index !== i) {
            nums.splice(index, 1)
            //存在一个重复元素并删除后，还要继续判断一次该元素是否仍然重复
            i--
        }
    }
    return nums.length
};

console.log(removeDuplicates([1, 2, 3, 1]))
console.log(removeDuplicates([1, 2, 3]))
console.log(removeDuplicates([1, 1, 1, 2, 2]))
console.log(removeDuplicates([1, 1, 1]))


