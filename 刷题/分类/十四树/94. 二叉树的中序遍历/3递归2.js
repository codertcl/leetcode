//中序遍历:
var inorderTraversal = function(root, res = []) {
    return root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : []
};
