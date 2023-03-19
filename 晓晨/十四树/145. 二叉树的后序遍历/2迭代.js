var postorderTraversal1 = function(root) {
    if (!root) return []
    const res = [], stack = [root]
    while (stack.length) {
        const curr = stack.pop();
        res.push(curr.val)
        if (curr.left) stack.push(curr.left)
        if (curr.right) stack.push(curr.right)
    }
    //res中顺序为中右左 stack顺序应为左右,所以先push左子树,res逆序后即为左右中
    res.reverse()
    return res
};
