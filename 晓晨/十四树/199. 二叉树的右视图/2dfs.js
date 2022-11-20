var rightSideView = function (root) {
    const res = []
    if (!root) return res
    const dfs = (root, step) => {
        if (root) {
            if (!res[step]) res[step] = []
            res[step].push(root.val)
            dfs(root.left, step + 1)
            dfs(root.right, step + 1)
        }
    }
    dfs(root, 0)
    let arr = []
    for (let i = 0; i < res.length; i++) {
        arr.push(res[i][res[i].length - 1])
    }
    return arr;
};