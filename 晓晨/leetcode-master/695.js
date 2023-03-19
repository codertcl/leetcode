var maxAreaOfIsland = function (grid) {
  let row = grid.length,
    col = grid[0].length;
  function dfs(x, y) {
    //越界判断 当grid[x][y] === 0时 直接返回
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) return 0;
    grid[x][y] = 0; //当grid[x][y] === 1时，将当前单元格置为0
    let ans = 1,
      dx = [-1, 1, 0, 0],
      dy = [0, 0, 1, -1]; //方向数组
    for (let i = 0; i < dx.length; i++) {
      //上下左右不断递归，计算每个岛屿的大小
      ans += dfs(x + dx[i], y + dy[i]);
    }
    return ans;
  }
  let res = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      res = Math.max(res, dfs(i, j)); //循环网格 更新最大岛屿
    }
  }
  return res;
};

var maxAreaOfIsland = function (grid) {
  let ans = 0,
    row = grid.length,
    col = grid[0].length;
  let dx = [1, -1, 0, 0],
    dy = [0, 0, 1, -1]; //方向数组
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) continue; //循环网格，遇到0就跳过
      let queue = [[i, j]],
        curr = 0; //在队列中加入当前网格的值
      while (queue.length > 0) {
        let [x, y] = queue.shift(); //不断出队
        //越界判断
        if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) continue;
        ++curr; //更新岛屿的数量
        grid[x][y] = 0; //遍历过的网格置为0
        for (let k = 0; k < dx.length; k++) {
          //上下左右遍历，把下一层的节点加入队列
          queue.push([x + dx[k], y + dy[k]]);
        }
      }
      ans = Math.max(ans, curr); //更新最大岛屿面积
    }
  }
  return ans;
};
