var minDepth = function (root) {
    if (!root) return 0
    let l = minDepth(root.left), r = minDepth(root.right)
    // 处理二叉树只有左子树或者右子树的情况
    // 如果左子树或右子树的深度不为 0，即存在一个子树，那么当前子树的最小深度就是该子树的深度+1
    // 如果左子树和右子树的深度都不为 0，即左右子树都存在，那么当前子树的最小深度就是它们较小值+1
    if (l === 0) return r + 1
    if (r === 0) return l + 1
    return Math.min(l, r) + 1
};
