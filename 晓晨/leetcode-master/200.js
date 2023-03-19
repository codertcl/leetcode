//方法1
const numIslands = (grid) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      //循环网格
      if (grid[i][j] === "1") {
        //如果为陆地，count++，
        count++;
        turnZero(i, j, grid);
      }
    }
  }
  return count;
};
function turnZero(i, j, grid) {
  //沉没四周的陆地
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") return; //检查坐标的合法性
  grid[i][j] = "0"; //让四周的陆地变为海水
  turnZero(i, j + 1, grid);
  turnZero(i, j - 1, grid);
  turnZero(i + 1, j, grid);
  turnZero(i - 1, j, grid);
}

//方法2
const numIslands = (grid) => {
  let count = 0;
  let queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        grid[i][j] = "0"; // 做标记，避免重复遍历
        queue.push([i, j]); //加入队列
        turnZero(queue, grid);
      }
    }
  }
  return count;
};
function turnZero(queue, grid) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  while (queue.length) {
    //当队列中还有元素的时候
    const cur = queue.shift(); //取出队首元素
    for (const dir of dirs) {
      //四个方向广度优先扩散
      const x = cur[0] + dir[0];
      const y = cur[1] + dir[1];
      if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== "1") {
        continue;
      } //检查坐标合法性
      grid[x][y] = "0"; //沉没陆地
      queue.push([x, y]); //四周的节点加入队列
    }
  }
}

//方法3
class UnionFind {
  constructor(n) {
    //构造一个节点数为n的集合
    this.count = n; //并查集总数
    this.parent = new Array(n);
    this.size = new Array(n); // size数组记录着每棵树的重量
    for (let i = 0; i < n; i++) {
      this.parent[i] = i; // 自己是自己的parent
      this.size[i] = 1; //每个集合上节点的数量
    }
  }

  union(p, q) {
    //连通结点p和结点q, p和q都是索引
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) return;
    // 元素数量小的接到数量多的下面，这样比较平衡
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }
    this.count--;
  }

  isConnected(p, q) {
    //判断p,q是否连通
    return this.find(p) === this.find(q);
  }

  find(x) {
    //找到x结点的root
    while (this.parent[x] != x) {
      // 进行路径压缩
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  getCount() {
    //返回子集数
    return this.count;
  }
}

var numIslands = function (grid) {
  let m = grid.length;
  if (m === 0) return 0;
  let n = grid[0].length;
  const dummy = -1;
  const dirs = [
    [1, 0],
    [0, 1],
  ]; //方向数组 向右 向下
  const uf = new UnionFind(m * n);
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++)
      if (grid[x][y] === "0") {
        //如果网格是0，则和dummy合并
        uf.union(n * x + y, dummy);
      } else if (grid[x][y] === "1") {
        //如果网格是1，则向右 向下尝试
        for (let d of dirs) {
          let r = x + d[0];
          let c = y + d[1];
          if (r >= m || c >= n) continue; //坐标合法性
          if (grid[r][c] === "1") {
            //当前网格的右边 下面如果是1，则和当前网格合并
            uf.union(n * x + y, n * r + c);
          }
        }
      }
  }
  return uf.getCount(); //返回并查集的个数减一就行
};
