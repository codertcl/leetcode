var lowestCommonAncestor = function (root, p, q) {
    //root为空 或者 root等于p或者q 则结果为root
    if (!root || (root === p || root === q)) return root
    // 在root的左右子树中找结果
    let l = lowestCommonAncestor(root.left, p, q)
    let r = lowestCommonAncestor(root.right, p, q)
    //对应结果为根节点 pq分别在左右子树上
    if (l && r) return root
    ////如果左子树没找到就说明p，q都在右子树
    return l || r
};
