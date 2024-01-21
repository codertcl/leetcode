var rightSideView = function (root) {
  function dfs(root, step, res) {
    //传入根节点 层数 右视的节点的数组
    if (root) {
      if (res.length === step) {
        res.push(root.val); //当res长度和step相等时 当前节点就是这一层的右节点 加入数组中
      }
      dfs(root.right, step + 1, res); //先递归右节点 让它在下一层先被处理
      dfs(root.left, step + 1, res);
    }
  }
  if (!root) return [];
  let arr = [];
  dfs(root, 0, arr);
  return arr;
};

var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root]; //广度优先遍历的队列 首先加入root
  let arr = []; //存放右视的节点
  while (queue.length > 0) {
    let len = queue.length;
    while (len) {
      let node = queue.shift(); //取出队列第一个元素
      if (len === 1) arr.push(node.val); //当当前层长度等于1时 说明是最边的节点
      if (node.left) queue.push(node.left); //继续向队列中添加左右节点
      if (node.right) queue.push(node.right);
      len--; //出队之后 当前层长度减1
    }
  }
  return arr;
};
