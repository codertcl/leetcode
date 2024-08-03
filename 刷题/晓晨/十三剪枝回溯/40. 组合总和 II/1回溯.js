/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const res = [], path = [];
    candidates.sort((a, b) => a - b)
    const backTracking = (sum, startIndex) => {
        if (sum === target) {
            res.push([...path]);
        } else if (sum < target) {
            for (let i = startIndex; i < candidates.length; i++) {
                // 树层去重，忽略掉同一层重复的选项，避免产生重复的组合。比如[1,2,2,2,5]，选了第一个 2，变成 [1,2]，它的下一选项也是 2，跳过它，因为如果选它，就还是 [1,2]，会重复
                if (i > startIndex && candidates[i] === candidates[i - 1]) continue
                // 剪枝
                if (candidates[i] + sum > target) return;
                path.push(candidates[i]);
                // 由于不可以重复选，所以下次递归的startIndex从i+1开始
                backTracking(sum + candidates[i], i + 1);
                path.pop();
            }
        }
    }
    backTracking(0, 0);
    return res;
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)) // [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2, 3, 6, 7], 7)) // [[7]]
console.log(combinationSum2([2, 3, 5], 8)) // [[3,5]]
console.log(combinationSum2([1, 2], 3)) // [[1, 2]]
console.log(combinationSum2([8, 7, 4, 3], 11)) // [[8,3],[7,4]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)) //[[1,2,2],[5]]
