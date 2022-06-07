var findMinArrowShots = function (points) {
    if (!points.length) return 0
    points = points.sort((a, b) => a[1] - b[1])
    let pos = points[0][1], res = 1
    for (const point of points) {
        //比较新区间和当前覆盖到的最远位置
        if (point[0] > pos) {
            //更新最远位置
            pos = point[1]
            res++
        }
    }
    return res
};

console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]))//2
console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]))//4
