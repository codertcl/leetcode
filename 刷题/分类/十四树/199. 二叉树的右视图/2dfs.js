// var rightSideView = function (root) {
//     const res = []
//     if (!root) return res
//     const dfs = (root, step) => {
//         if (root) {
//             if (!res[step]) res[step] = []
//             res[step].push(root.val)
//             dfs(root.left, step + 1)
//             dfs(root.right, step + 1)
//         }
//     }
//     dfs(root, 0)
//     let arr = []
//     for (let i = 0; i < res.length; i++) {
//         arr.push(res[i][res[i].length - 1])
//     }
//     return arr;
// };

var rightSideView = function (root) {
    const res = []
    if (!root) return res
    const dfs = (root, step) => {
        if (root) {
            // 如果当前节点所在深度还没有出现在res里
            // 说明在该深度下当前节点是第一个被访问的节点
            // 因此将当前节点加入res中。
            if (res.length === step) {
                res.push(root.val)
            }
            //注意先递归右子树,再递归左子树
            dfs(root.right, step + 1)
            dfs(root.left, step + 1)
        }
    }
    dfs(root, 0)
    return res;
};