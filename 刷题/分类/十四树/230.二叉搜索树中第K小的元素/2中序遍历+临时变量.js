/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let res;
    const inOrder = (node) => {
        if (!node) return;
        inOrder(node.left);
        if (k===1) res = node.val; // 不能在此处直接返回，否则会存在返回值为undefined的情况
        k--;
        inOrder(node.right);
    }
    inOrder(root);
    return res;
};