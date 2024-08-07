const arr = [1, [2, 3], [1, 5, 6, [7, 9, [11, [32]]]], 10];

const getDepth = (arr) => {
    if (!Array.isArray(arr)) {
        // 如果不是数组，则深度为0
        return 0;
    }
    let maxDepth = 0;
    for (const item of arr) {
        maxDepth = Math.max(maxDepth, getDepth(item) + 1)
        getDepth(item);
    }
    return maxDepth;
}
console.log(getDepth(arr));// 5
console.log(getDepth([]));// 0