var postorderTraversal1 = function(root) {
    if (!root) return []
    const res = [], stack = []
    stack.push(root)
    while (stack.length) {
        const curr = stack.pop();
        res.push(curr.val)
        if (curr.left) stack.push(curr.left)
        if (curr.right) stack.push(curr.right)
    }
    //res中顺序为中右左 stack顺序应为左右 逆序后即为左右中
    res.reverse()
    return res
};
