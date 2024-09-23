var preorderTraversal = function (root) {
    if (!root) return []
    const res = [], stack = [root]
    while (stack.length) {
        let node = stack.pop()
        res.push(node.val)
        // 由于栈先进后出,要先遍历左子树,后遍历右子树,所以先把右子树添加到栈中
        // if (node.right) stack.push(node.right)
        // if (node.left) stack.push(node.left)
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return res
};
