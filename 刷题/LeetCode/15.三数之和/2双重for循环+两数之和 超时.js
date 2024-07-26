/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue
            if (map.has(-nums[i] - nums[j])) {
                const index = map.get(-nums[i] - nums[j])
                if (index !== i && index !== j)
                    res.push([nums[i], nums[j], nums[index]])
            }
        }
    }

    // 使用 Set 存储已经出现过的数组的字符串表示
    const seen = new Set();
    const uniqueArr = [];

    for (const item of res) {
        // 将数组元素排序，确保相同的数组具有相同的字符串表示
        const sortedItem = JSON.stringify(item.slice().sort((a, b) => a - b));
        if (!seen.has(sortedItem)) {
            seen.add(sortedItem);
            uniqueArr.push(item);
        }
    }
    return uniqueArr
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))