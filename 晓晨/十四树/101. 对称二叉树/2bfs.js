var isSymmetric = function (root) {
    const isMirror = (l, r) => {
        const queue = [l, r];
        while (queue.length) {
            const p = queue.shift()
            const q = queue.shift()
            if (!p && !q) continue; //两个空节点也为镜像 但不能直接返回true,还要判断队列中其他元素
            if ((!p || !q) || (p.val !== q.val)) {
                return false;
            }
            queue.push(p.left, q.right);
            queue.push(p.right, q.left);
        }
        return true
    }
    return isMirror(root.left, root.right)
};
