/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let m = grid.length, n = grid[0].length
    const dfs = (x, y) => {
        //越界判断 当grid[x][y] === 0时 直接返回
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 0) return 0;
        grid[x][y] = 0;//当grid[x][y] === 1时，将当前单元格置为0
        let ans = 1, dx = [-1, 1, 0, 0], dy = [0, 0, 1, -1];//方向数组
        for (let i = 0; i < dx.length; i++) {//上下左右不断递归，计算每个岛屿的大小
            ans += dfs(x + dx[i], y + dy[i]);
        }
        return ans;
    }
    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            count = Math.max(count, dfs(i, j))
        }
    }
    return count
};
//6
console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]))
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]))//0
