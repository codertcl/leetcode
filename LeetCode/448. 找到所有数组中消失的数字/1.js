/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    if (n ===1) return [];
    const obj = {};
    for (let i = 0; i < n; i++) {
        obj[nums[i]] = true;
    }
    const res = [];
    for (let i = 1; i <= n; i++) {
        if (!obj[i]) {
            res.push(i)
        }
    }
    return res;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([4,3,2,3,1]))