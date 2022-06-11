var floodFill = function (image, sr, sc, newColor) {
    let tar = image[sr][sc], m = image.length, n = image[0].length
    //如果新旧颜色相等则不用修改
    if (tar === newColor) return image
    const dfs = (x, y) => {
        if (x < 0 || y < 0 || x >= m || y >= n ||image[x][y] !== tar) return
        image[x][y] = newColor
        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
    }
    dfs(sr, sc)
    return image
};

//[[2,2,2],[2,2,0],[2,0,1]]
debugger
console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
////[[2,2,2],[2,2,2]]
console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 2))
