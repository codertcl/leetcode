var binaryTreePaths = function(root) {
    const paths = [];
    const dfs = (root, path) => {//传入递归的节点和路径数组
        //当root只有一个子节点为空时，且root为对应的空子节点另一个子节点
        //该次的递归不进行任何处理,path也不会改变，直接去处理
        if (root) {
            path += root.val.toString();//加入当前节点
            //叶子结点就将所有连接起来的节点字符串加入paths中 也就是其中一条路径
            if (root.left === null && root.right === null) {
                paths.push(path);
            } else {
                path += "->"; //不是叶子节点继续递归左右子树
                dfs(root.left, path);
                dfs(root.right, path);
            }
        }
    }
    dfs(root, "");
    return paths;
};