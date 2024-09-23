var largestValues = function (root) {
    if (!root) return [];
    const res = [], queue = [root];
    while (queue.length) {
        let count = queue.length, cur = [], node;
        for (let i = 0; i < count; i++) {
            node = queue.shift();
            cur.push(node.val);
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(Math.max(...cur))
    }
    return res;
};