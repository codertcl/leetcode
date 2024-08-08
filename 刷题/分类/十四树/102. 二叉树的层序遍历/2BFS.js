var levelOrder = function (root) {
    const ret = [];
    if (!root) {
        return ret;
    }
    // q存储父元素及其对应的子元素
    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        //第 i 次迭代前，队列中的所有元素就是第 i 层的所有元素，并且按照从左向右的顺序排列
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    return ret;
};
