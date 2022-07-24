var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let dep = 1, q = [root];
    while (q.length) {
        // 当前层的节点个数
        const currentLevelSize = q.length;
        //第 i 次迭代前，队列中的所有元素就是第 i 层的所有元素，并且按照从左向右的顺序排列
        for (let i = 1; i <= currentLevelSize; ++i) {
            // 当前出列的节点
            const node = q.shift();
            // 左右子节点入列
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        // 当前层所有节点已经出列，如果队列不为空，说明有下一层节点，depth+1
        if (q.length) dep++
    }
    return dep;
};
