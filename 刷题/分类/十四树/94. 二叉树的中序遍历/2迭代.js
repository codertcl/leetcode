// 迭代解法
var inorderTraversal = function(root) {
    if (!root) return []
    const res = [], stack = []
    let curr = root
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        const node = stack.pop()
        res.push(node.val)
        curr = node.right
    }
    return res
};
