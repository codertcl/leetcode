var maxDepth = function (root) {
    if (!root) return 0
    let l = root.left ? 1 + maxDepth(root.left) : 1
    let r = root.right ? 1 + maxDepth(root.right) : 1
    return Math.max(l, r)
};
