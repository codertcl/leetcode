var hasPathSum = function (root, targetSum) {
    if (!root) return false
    const queue = [root], res = [root.val]
    while (queue.length) {
        let p = queue.shift()
        let q = res.shift()
        if (!p.left && !p.right && targetSum === q) {
            return true
        }
        if (p.left) {
            queue.push(p.left)
            res.push(q + p.left.val)
        }
        if (p.right) {
            queue.push(p.right)
            res.push(q + p.right.val)
        }
    }
    return false
};
