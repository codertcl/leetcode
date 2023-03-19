const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER;//初始化最大路径和

  const dfs = (root) => {
      if (root == null) {//遍历节点是null 返回0
         return 0;
      }
      const left = dfs(root.left);   //递归左子树最大路径和
      const right = dfs(root.right); //递归右子树最大路径和

      maxSum = Math.max(maxSum, left + root.val + right);      //更新最大值

      //返回当前子树的路径和 分为走左边、右边、不动 3种情况
      const pathSum = root.val + Math.max(0, left, right);
      return pathSum < 0 ? 0 : pathSum;
  };

  dfs(root);

  return maxSum; 
};

