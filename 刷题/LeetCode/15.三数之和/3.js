/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const map = new Map();
    nums.forEach((num, index) => {
        map.set(num, index);
    });

    const res = [];
    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue; // 跳过重复的元素

        let j = i + 1;
        let k = sortedNums.length - 1;

        while (j < k) {
            const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
            if (sum === 0) {
                res.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                while (j < k && sortedNums[j] === sortedNums[j + 1]) j++; // 跳过重复的元素
                while (j < k && sortedNums[k] === sortedNums[k - 1]) k--; // 跳过重复的元素
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    // 使用 Set 存储已经出现过的数组的字符串表示
    const seen = new Set();
    const uniqueArr = [];
    for (const item of res) {
        const sortedItem = JSON.stringify(item.sort((a, b) => a - b));
        if (!seen.has(sortedItem)) {
            seen.add(sortedItem);
            uniqueArr.push(item);
        }
    }

    return uniqueArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));