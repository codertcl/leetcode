//Set 的查找是 O(1)
// 查找 Set 中的元素的时间复杂度是 O(1)，JS 的 Set 能给数组去掉重复元素
// 将数组元素存入 set 中，遍历数组 nums
// 如果 当前项 - 1 存在于 set ，说明当前项不是连续序列的起点，跳过，继续遍历
// 当前项没有“左邻居”，它就是连续序列的起点
// 不断在 set 中查看 cur + 1 是否存在，存在，则 count +1
// cur 不再有 “右邻居” 了，就算出了一段连续序列的长度
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums), max = 0
    for (const item of set) {
        if (!set.has(item - 1)) {
            let count = 1, cur = item
            while (set.has(cur + 1)) {
                cur++;
                count++
            }
            max = Math.max(max, count);
        }
    }
    return max;
};
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([4, 5, 1, 3, 2]))
console.log(longestConsecutive([0]))
console.log(longestConsecutive([1, 2, 0, 1]))
