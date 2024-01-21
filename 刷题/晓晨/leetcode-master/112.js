const hasPathSum = (root, sum) => {
  if (root == null) {
    //递归终止条件
    return false;
  }
  if (root.left == null && root.right == null) {
    //遍历到叶子节点
    return sum - root.val == 0; //sum正好减少到了0 返回ture 否则返回false
  }
  //递归左右子树，有一个返回true就找到了一条这样的路径
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
