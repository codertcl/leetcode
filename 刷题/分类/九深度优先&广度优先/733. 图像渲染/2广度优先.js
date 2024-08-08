var floodFill = function (image, sr, sc, newColor) {
    let tar = image[sr][sc], m = image.length, n = image[0].length
    //如果新旧颜色相等则不用修改
    if (tar === newColor) return image
    let queue = [[sr, sc]]
    while (queue.length) {
        let [x, y] = queue.shift()
        if (x < 0 || y < 0 || x >= m || y >= n || image[x][y] !== tar) continue
        image[x][y] = newColor
        queue.push([x - 1, y])
        queue.push([x + 1, y])
        queue.push([x, y - 1])
        queue.push([x, y + 1])
    }
    return image
};

//[[2,2,2],[2,2,0],[2,0,1]]
debugger
console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
////[[2,2,2],[2,2,2]]
console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 2))
