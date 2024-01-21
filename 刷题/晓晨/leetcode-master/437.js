//方法1
var pathSum = function (root, targetSum) {
  if (root == null) {
    return 0;
  }

  let ret = rootSum(root, targetSum); //以root为根节点的树中寻找路径
  ret += pathSum(root.left, targetSum); //递归左子树，在左子树中寻找路径
  ret += pathSum(root.right, targetSum); //递归右子树，在左子树中寻找路径
  return ret;
};

const rootSum = (root, targetSum) => {
  let ret = 0;

  if (root == null) {
    return 0;
  }
  const val = root.val;
  if (val === targetSum) {
    ret++;
  }

  //以root.left为根节点，targetSum - val为寻找的路径和，继续寻找路径
  ret += rootSum(root.left, targetSum - val);
  //以root.right为根节点，targetSum - val为寻找的路径和，继续寻找路径
  ret += rootSum(root.right, targetSum - val);
  return ret;
};

//方法2
var pathSum = function (root, targetSum) {
  const prefix = new Map(); //存放前缀和 和它的路径数量
  prefix.set(0, 1); //初始化前缀和是0的个数
  return dfs(root, prefix, 0, targetSum);
};

const dfs = (root, prefix, curr, targetSum) => {
  //curr指到达当前节点的路径上的和
  if (root == null) {
    //空节点就没有路径了，返回0
    return 0;
  }

  let ret = 0;
  curr += root.val; //加上当前节点

  ret = prefix.get(curr - targetSum) || 0; //获取以curr - targetSum的前缀和的数量
  prefix.set(curr, (prefix.get(curr) || 0) + 1); //在prefix中增加curr的前缀和的数量
  ret += dfs(root.left, prefix, curr, targetSum); //递归左子树 加上左子树前缀和为targetSum的路径数
  ret += dfs(root.right, prefix, curr, targetSum); //递归右子树 加上右子树前缀和为targetSum的路径数
  prefix.set(curr, (prefix.get(curr) || 0) - 1); //节点递归完毕，回溯curr的前缀和数量 避免重复计算

  return ret;
};
