var binaryTreePaths = function (root) {
    const res = [];
    if (!root) return res
    let queue = [root], paths = [root.val.toString()];
    while (queue.length) {
        let node = queue.shift(), path = paths.shift();
        if (!node.left && !node.right) {
            res.push(path)
        } else {
            if (node.left) {
                queue.push(node.left)
                paths.push(path + '->' + node.left.val)
            }
            if (node.right) {
                queue.push(node.right)
                paths.push(path + '->' + node.right.val)
            }
        }
    }
    return res
}