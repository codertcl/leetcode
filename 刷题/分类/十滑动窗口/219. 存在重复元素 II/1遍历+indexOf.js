/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    if (nums.length < 2) return false
    for (let i = 0; i < nums.length - 1; i++) {
        //在截取的数组中查找该元素
        let index = nums.slice(i + 1).indexOf(nums[i])
        if (index !== -1 && index + 1 <= k) {
            return true
        }
    }
    return false
};
console.log(containsNearbyDuplicate([-1, -1], 1))//true
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))//true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))//true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))//false
console.log(containsNearbyDuplicate([0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], 1))//true
