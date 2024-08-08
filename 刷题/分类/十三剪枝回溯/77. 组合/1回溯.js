/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [], path = [];
    // startIndex用来避免数据重复
    const backTracking = (startIndex) => {
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let num = startIndex; num <= n; num++) {
            path.push(num);
            backTracking(num + 1);
            path.pop();
        }
    }

    backTracking(1);
    return res;
};

console.log(combine(4, 4))
console.log(combine(4, 2))
console.log(combine(4, 1))
console.log(combine(1, 1))