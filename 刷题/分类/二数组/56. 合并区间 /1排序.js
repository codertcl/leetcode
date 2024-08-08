/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
   intervals =  intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < intervals.length - 1; i++) {
        // 两个区间交叉
        if (intervals[i][1] >= intervals[i+1][0] && intervals[i][1] < intervals[i+1][1]) {
            intervals.splice(i, 2, [intervals[i][0], intervals[i+1][1]]);
            i--;
        } else if (intervals[i][1] >= intervals[i+1][1] && intervals[i][0] <= intervals[i+1][0]) {
            // 前一个区间包含后一个区间
            intervals.splice(i+1, 1);
            i--;
        }
    }
    return intervals
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])) // [[1,5]]
console.log(merge([[1,4],[2,3]])) // [[1,4]]