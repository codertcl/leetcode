var levelOrder = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }

    const q = [];
    q.push(root);//初始队列
    while (q.length !== 0) {
        const currentLevelSize = q.length;//当前层节点的数量
        ret.push([]);//新的层推入数组
        for (let i = 1; i <= currentLevelSize; ++i) {//循环当前层的节点
            const node = q.shift();
            ret[ret.length - 1].push(node.val);//推入当前层的数组
            if (node.left) q.push(node.left);//检查左节点，存在左节点就继续加入队列
            if (node.right) q.push(node.right);//检查左右节点，存在右节点就继续加入队列
        }
    }
        
    return ret;
};

