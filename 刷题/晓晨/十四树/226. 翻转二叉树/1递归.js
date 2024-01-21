var invertTree = function (root) {
    if (!root) return root
    let l = invertTree(root.left), r = invertTree(root.right)
    root.left = r
    root.right = l
    return root
};
