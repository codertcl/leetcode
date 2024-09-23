var preorderTraversal = function(root, res = []) {
    return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : []
};
