/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) map[nums[i]]++;
        else map[nums[i]] = 1;
    }
    const arr = [];
    for (const [key, value] of Object.entries(map)) {
        arr.push({
            key,
            value
        })
    }
    return arr.sort((a, b) => b.value - a.value).slice(0, k).map(item => +item.key);
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]