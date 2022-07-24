var lowestCommonAncestor = function (root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root===null) return false

        let l = dfs(root.left, p, q)
        let r = dfs(root.right, p, q)
        if ((l && r) || ((l || r) && (p.val === root.val || q.val === root.val))) {
            ans = root
        }
        //root是否包含p或q
        return (r || l) || (p.val === root.val || q.val === root.val)
    }
    dfs(root, p, q)
    return ans
};
