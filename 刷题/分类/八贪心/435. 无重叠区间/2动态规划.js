var eraseOverlapIntervals = function (intervals) {
    if (!intervals.length) {
        return 0;
    }

    intervals.sort((a, b) => a[1] - b[1]); //按右边界排序
    const n = intervals.length;
    let ans = 1, right = intervals[0][1]
    for (let i = 1; i < n; i++) {
        if (intervals[i][0] >= right) {
            ans++
            right = intervals[i][1]
        }
    }
    return n - ans;
};
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))//1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]))//2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]))//0
