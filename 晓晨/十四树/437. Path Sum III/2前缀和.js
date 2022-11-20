var pathSum = function (root, targetSum) {
    if (!root) return 0
    let queue = [root], res = [root.val], count = 0;
    while (queue.length) {
        let p = queue.shift(), q = res.shift();
        if (q === targetSum) {
            count++
        }
        if (p.left) {
            queue.push(p.left)
            res.push(p.left.val + q)
        }
        if (p.right) {
            queue.push(p.right)
            res.push(p.right.val + q)
        }
    }
    return count;
};
