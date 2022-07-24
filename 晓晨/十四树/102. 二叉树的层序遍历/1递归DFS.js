var levelOrder = function (root) {
    if (!root) return []
    //res的每个元素为对应层数的节点
    let res = []
    const dfs = (root, step) => {
        if(root){
            // 该层目前不含节点 则将其初始化为空数组
            if (!res[step]) res[step] = []
            res[step].push(root.val)
            dfs(root.left, step + 1)
            dfs(root.right, step + 1)
        }
    }
    dfs(root, 0)
    return res
};
