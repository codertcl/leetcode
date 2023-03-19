var cloneGraph = function (node) {
  if (!node) return;
  const visited = new Map(); //存放遍历过的节点
  const dfs = (n) => {
    const nCopy = new Node(n.val); //拷贝节点
    visited.set(n, nCopy); //节点值和新建节点以键值对存入visited
    (n.neighbors || []).forEach((ne) => {
      if (!visited.has(ne)) {
        dfs(ne); //递归遍历相邻节点
      }
      nCopy.neighbors.push(visited.get(ne)); //复制相邻节点
    });
  };
  dfs(node); //深度优先遍历
  return visited.get(node); //返回visited中的新创建的节点
};

var cloneGraph = function (node) {
  if (!node) return;
  const visited = new Map();
  visited.set(node, new Node(node.val)); //节点值和新建节点以键值对存入visited
  const q = [node];
  while (q.length) {
    const n = q
      .shift()(
        //出队
        n.neighbors || []
      )
      .forEach((ne) => {
        //循环相邻节点
        if (!visited.has(ne)) {
          //没有访问过就加入队列
          q.push(ne);
          visited.set(ne, new Node(ne.val));
        }
        visited.get(n).neighbors.push(visited.get(ne)); //复制相邻节点
      });
  }
  return visited.get(node);
};
