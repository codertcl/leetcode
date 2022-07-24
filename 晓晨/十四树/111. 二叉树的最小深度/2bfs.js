var minDepth = function (root) {
    //广度优先遍历二叉树，每一层深度+1，遇到第一个叶子结点终止，此时的深度就是最小深度
    if (!root) return 0
    let res = 1, q = [root]
    while (q.length) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let node = q.shift()
            //判断当前节点是否为叶子结点
            if (!node.left && !node.right) return res
            //不是叶子结点 则将其存在的子节点加入到队列中
            node.left && q.push(node.left)
            node.right && q.push(node.right)
        }
        res++
    }
    return res
};
