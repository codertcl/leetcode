/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i]
        }
    }
    return j
};

console.log(removeElement([1, 2, 3, 5, 3], 3))
console.log(removeElement([3, 3, 3], 3))
