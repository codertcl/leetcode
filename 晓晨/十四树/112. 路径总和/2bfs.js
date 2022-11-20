var hasPathSum = function (root, targetSum) {
    if (!root) return false
    // 遍历到叶子节点
    if (!root.left && !root.right) {
        //targetSum等于节点值 返回ture 否则返回false
        return targetSum === root.val
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};
