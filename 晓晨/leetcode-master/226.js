var invertTree = function (root) {
  if (root === null) {
    //递归终止条件
    return null;
  }
  const left = invertTree(root.left); //递归左子树
  const right = invertTree(root.right); //递归右子树
  //交换左右节点
  root.left = right;
  root.right = left;
  return root;
};
