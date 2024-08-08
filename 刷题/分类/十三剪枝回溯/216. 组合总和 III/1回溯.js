/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    if (n < k) return [];
    const res = [], path = [];
    // startIndex用来避免数据重复
    const backTracking = (startIndex) => {
        const sum = path.length ? path.reduce((prev, cur) => prev + (cur || 0)) : 0;
        // 判断当前剩下的元素个数（n - startIndex + 1） + path中的个数全选上能否满足个数要求
        if (n - startIndex + 1 + path.length < k || sum > n) {
            return;
        }
        if (path.length === k && sum === n) {
            res.push([...path]);
            return;
        }
        for (let num = startIndex; num <= 9; num++) {
            path.push(num);
            backTracking(num + 1);
            path.pop();
        }
    }

    backTracking(1);
    return res;
};
console.log(combinationSum3(3, 7)) // [[1,2,4]]
console.log(combinationSum3(3, 9)) // [[1,2,6], [1,3,5], [2,3,4]]