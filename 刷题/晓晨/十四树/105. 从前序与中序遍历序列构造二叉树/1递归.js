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
var buildTree = function (preorder, inorder) {
    if (preorder.length || inorder.length) {
        const rootIndex = inorder.findIndex(item => item === preorder[0]);
        const lInOrder = inorder.slice(0, rootIndex);
        const rInOrder = inorder.slice(rootIndex + 1);
        const lPreOder = preorder.slice(1, rootIndex + 1);
        const rPreOder = preorder.slice(rootIndex + 1);
        return new TreeNode(preorder[0], buildTree(lPreOder, lInOrder), buildTree(rPreOder, rInOrder));
    }
    return null;
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))