var combinationSum = function (candidates, target) {
    const res = [], path = []
    let sum = 0

    // 本题还需要startIndex来控制for循环的起始位置，对于组合问题，什么时候需要startIndex呢？
    // 如果是一个集合来求组合的话，就需要startIndex
    // 如果是多个集合取组合，各个集合之间相互不影响，那么就不用startIndex
    const backTracking = (startIndex) => {
        // 因为元素都大于0，所以sum比target则结束
        if (sum > target) return;
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            sum += candidates[i]
            path.push(candidates[i])
            // 由于可以重复选，所以下次递归的startIndex仍从i开始
            backTracking(i);
            path.pop();
            sum -= candidates[i]
        }
    }

    backTracking(0)
    return res;
};
console.log(combinationSum([2, 3, 6, 7], 7)) // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([1, 2], 3)) // [[1, 2]]
console.log(combinationSum([8, 7, 4, 3], 11)) // [[8,3],[7,4],[4,4,3]]