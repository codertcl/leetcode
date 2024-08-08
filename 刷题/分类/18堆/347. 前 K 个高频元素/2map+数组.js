/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map(), arr = [...new Set(nums)];
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i])+1 : 1);
    }
    return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]