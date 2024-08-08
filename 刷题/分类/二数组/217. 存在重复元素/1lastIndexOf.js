/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        //判断该元素lastIndex和当前下标是否相等
        let index = nums.lastIndexOf(nums[i])
        if (index !== i) return true
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]))//true
console.log(containsDuplicate([1,2,3,4]))//false
console.log(containsDuplicate([1,2,1,4]))//true
