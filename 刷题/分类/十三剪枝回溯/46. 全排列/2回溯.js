
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [], path = [], used = [];
    backtracking();
    return res;

    function backtracking() {
        if(path.length === nums.length) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < nums.length; i++ ) {
            if(used[i]) continue;
            path.push(nums[i]);
            used[i] = true; // 同支
            backtracking();
            path.pop();
            used[i] = false;
        }
    }
};

console.log(permute([1, 2, 3]));
console.log(permute([0,1]));
console.log(permute([1]));
