var binaryTreePaths = function (root) {
  const paths = [];
  const dfs = (root, path) => {
    //传入递归的节点和路径数组
    if (root) {
      path += root.val.toString(); //加入当前节点
      //叶子结点就将所有连接起来的节点字符串加入paths中 也就是其中一条路径
      if (root.left === null && root.right === null) {
        paths.push(path);
      } else {
        path += "->"; //不是叶子节点继续递归左右子树
        dfs(root.left, path);
        dfs(root.right, path);
      }
    }
  };
  dfs(root, "");
  return paths;
};

var binaryTreePaths = function (root) {
  const res = [];
  if (root === null) {
    return res;
  }
  const nodes = [root];
  const paths = [root.val.toString()];

  while (nodes.length) {
    const node = nodes.shift();
    const path = paths.shift();

    if (node.left === null && node.right === null) {
      //叶子节点
      res.push(path);
    } else {
      if (node.left !== null) {
        //左节点不为空 加入队列
        nodes.push(node.left);
        paths.push(path + "->" + node.left.val.toString());
      }

      if (node.right !== null) {
        //右节点不为空 加入队列
        nodes.push(node.right);
        paths.push(path + "->" + node.right.val.toString());
      }
    }
  }
  return res;
};
