/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [], path = [];
    candidates.sort((a, b) => a - b)
    const backTracking = (sum, startIndex) => {
        if (sum === target) {
            res.push([...path]);
        } else if (sum < target) {
            for (let i = startIndex; i < candidates.length; i++) {
                // 剪枝
                if (candidates[i] + sum > target) return;
                path.push(candidates[i]);
                // 由于可以重复选，所以下次递归的startIndex仍从i开始
                backTracking(sum + candidates[i], i);
                path.pop();
            }
        }
    }
    backTracking(0, 0);
    return res;
}
console.log(combinationSum([2, 3, 6, 7], 7)) // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([1, 2], 3)) // [[1, 2]]
console.log(combinationSum([8, 7, 4, 3], 11)) // [[8,3],[7,4],[4,4,3]]
