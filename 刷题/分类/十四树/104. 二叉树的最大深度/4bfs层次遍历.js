var maxDepth = function (root) {
    if (!root) return 0;
    let res = 0, queue = [root];
    while (queue.length) {
        let count = queue.length, node;
        for (let i = 0; i < count; i++) {
            node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res++;
    }
    return res;
};