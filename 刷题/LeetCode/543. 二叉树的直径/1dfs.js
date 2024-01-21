var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;
    // dfs返回值为root为根的子树的深度
    const dfs = (root) => {
        // 访问到空节点了，返回0
        if (root == null) return 0;
        // 左子树为根的子树的的深度
        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        maxDiameter = Math.max(maxDiameter, leftMax + rightMax);
        // 返回该节点为根的子树的的深度
        return Math.max(leftMax, rightMax) + 1;
    };
    dfs(root);
    return maxDiameter;
};
