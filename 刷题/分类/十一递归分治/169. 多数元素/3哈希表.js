/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if(nums.length<3) return nums[0]
    //记录出现次数
    let map = new Map(), half = Math.floor(nums.length / 2)
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let count = map.get(nums[i]) + 1
            if (count > half) {
                return nums[i]
            }
            map.set(nums[i], count)
        } else map.set(nums[i], 1)
    }
};
console.log(majorityElement([3, 2, 3]))//3
console.log(majorityElement([3]))//3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))//2
