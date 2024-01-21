//方法1
var findCircleNum = function(isConnected) {
  const rows = isConnected.length;
  const visited = new Set();//记录是否访问过
  let count = 0;//省份数量
  for (let i = 0; i < rows; i++) {
      if (!visited.has(i)) {//如果没访问过
          dfs(isConnected, visited, rows, i);//深度优先遍历
          count++;//省份数量+1
      }
  }
  return count;
};

const dfs = (isConnected, visited, rows, i) => {
  for (let j = 0; j < rows; j++) {
      if (isConnected[i][j] == 1 && !visited.has(j)) {//如果i，j相连接
          visited.add(j);
          dfs(isConnected, visited, rows, j);//递归遍历
      }
  }
};



//方法2
var findCircleNum = function(isConnected) {
  const rows = isConnected.length;
  const visited = new Set();//记录是否访问过
  let count = 0;
  const queue = new Array();
  for (let i = 0; i < rows; i++) {
      if (!visited.has(i)) {//没有访问过
          queue.push(i); //加入队列
          while (queue.length) {//队列不为空 继续循环
              const j = queue.shift();//出队
              visited.add(j);
              for (let k = 0; k < rows; k++) {//循环相邻的城市 加入队列
                  if (isConnected[j][k] === 1 && !visited.has(k)) {
                      queue.push(k);
                  }
              }
          }
          count++;
      }
  }
  return count;
};

//方法3
class UnionFind{
  constructor(n){ //构造一个大小为n的集合
      this.count = n
      this.parent = new Array(n)   
      this.size = new Array(n)  // size数组记录着每棵树的大小
      for (let i = 0; i < n; i++) {
          this.parent[i] = i; // 自己是自己的parent
          this.size[i] = 1;
      }
  }

  union(p,q){ //连通结点p和结点q, p和q都是索引
      let rootP = this.find(p);
      let rootQ = this.find(q);
      if(rootP === rootQ) return
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

  isConnected(p, q) { //判断p,q是否连通
      return this.find(p)=== this.find(q) 
  }

  find(x) { //找到x结点的root
      while (this.parent[x] != x) {
          // 进行路径压缩
          this.parent[x] = this.parent[this.parent[x]];
          x = this.parent[x];
      }
      return x;
  }

  getCount() { //返回子集个数
      return this.count;
  }
}


var findCircleNum = function(isConnected) {
  const provinces = isConnected.length;
  const uf = new UnionFind(provinces)

  for (let i = 0; i < provinces; i++) {
      for (let j = i + 1; j < provinces; j++) {
          if (isConnected[i][j] == 1) {//相邻城市合并
              uf.union(i, j);
          }
      }
  }

  return uf.getCount();
};

