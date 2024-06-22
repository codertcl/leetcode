/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//  https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/2646359/tu-jie-cong-on2-dao-onpythonjavacgojsrus-aob8/
var buildTree = function(preorder, inorder) {
    let pre = 0;
    let i = 0;

    const build = function(start, end) {
        if (start > end) {
            return null; // 子树为空
        }

        const rootVal = preorder[pre++]; // 选择前序遍历的第一个节点作为根
        const rootIndex = inorder.indexOf(rootVal); // 找到根在中序遍历中的位置

        const root = new TreeNode(rootVal);
        root.left = build(start, rootIndex - 1); // 构建左子树
        root.right = build(rootIndex + 1, end); // 构建右子树
        return root;
    };

    return build(0, inorder.length - 1); // 从中序遍历的开始到结束构建整棵树
};
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))