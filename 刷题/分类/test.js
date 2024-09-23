var maxDepth = function (root) {
    if (!root) return 0;
    let l = maxDepth(root.left);
    let r = maxDepth(root.right);
    if (l === 0) return r + 1
    if (r === 0) return l + 1
    return Math.max(r, l) + 1;
}