/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0, right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            //更新left，并重新判断left值是否为val
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};

console.log(removeElement([1, 2, 3, 5, 3], 3))
console.log(removeElement([3, 3, 3], 3))
