/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return root;
    const res = [], queue = [root];
    while (queue.length) {
        let count = queue.length, cur = [], node;
        for (let i = 0; i < count; i++) {
            node = queue.shift();
            cur.push(node);
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        for (let i = 0; i < cur.length - 1; i++) {
            cur[i].next = cur[i + 1]
        }
        cur[cur.length - 1].next = null
    }
    return root;
};