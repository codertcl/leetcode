var levelOrderBottom = function (root) {
    const res = [], queue = [root];
    if (!root) return res;
    while (queue.length) {
        const count = queue.length, curLevel = [];
        for (let i = 0; i < count; i++) {
            const node = queue.shift();
            curLevel.push(node.val);
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(curLevel)
    }
    return res.reverse();
};
