var levelOrder = function (root) {
    const res = []
    const dfs = (root, step) => {
        if (root) {
            if (!res[step]) res[step] = []
            res[step].push(root.val)
            dfs(root.left, step + 1)
            dfs(root.right, step + 1)
        }
    }
    dfs(root, 0)
    return res;
};
