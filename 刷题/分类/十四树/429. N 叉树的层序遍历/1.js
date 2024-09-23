var levelOrder = function (root) {
    if (!root) return [];
    const res = [], queue = [root];
    while (queue.length) {
        let count = queue.length, cur = [], node;
        for (let i = 0; i < count; i++) {
            node = queue.shift();
            cur.push(node.val);
            if (node.children) {
                for (const child of node.children) {
                    queue.push(child)
                }
            }
        }
        res.push(cur)
    }
    return res;
};