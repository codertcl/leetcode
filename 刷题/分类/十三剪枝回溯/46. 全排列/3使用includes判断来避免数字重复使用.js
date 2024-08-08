/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [], path = [];
    const backTracking = () => {
        if (path.length === nums.length) {
            res.push([...path])
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            // 用过的数据不用了，但导致时间复杂度为O(n^2)，所以最好用方法1，使用used数组，空间换时间
            if (path.includes(nums[i])) continue;
            path.push(nums[i])
            backTracking()
            path.pop();
        }
    }
    backTracking(0);
    return res;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
