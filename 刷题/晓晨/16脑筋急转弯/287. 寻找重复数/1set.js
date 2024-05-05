/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const set = new Set() // 使用数组会超时
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return nums[i]
        set.add(nums[i])
    }
};

console.log(findDuplicate([1,3,4,2,2])) //2
console.log(findDuplicate([3,3,3,3,3])) //3