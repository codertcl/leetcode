var invertTree = function (root) {
    if (!root) return root
    let q = [root]
    while (q.length) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let node = q.shift()
            let tmp = node.left
            node.left = node.right
            node.right = tmp
            node.left && q.push(node.left)
            node.right && q.push(node.right)
        }
    }
    return root
};
