var isSameTree = function (p, q) {
    // pq一个为空 返回false
    if ((p && !q) || (!p && q)) return false
    // pq都不为空且值不一样返回false
    if ((p && q) && p.val !== q.val)
        return false
    // q都为空 返回true
    if (!p && !q) return true
    // p q不为空且值相等 则分别判断左右子树
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
