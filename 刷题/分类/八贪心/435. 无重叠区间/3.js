/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    const len = intervals.length;
    if (!len) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let res = 1, right = intervals[0][1];
    for (let i = 1; i < len; i++) {
        if (right <= intervals[i][0]) {
            res++;
            right = intervals[i][1]
        }
    }
    return len - res;
};
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))//1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]))//2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]))//0