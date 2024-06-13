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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const arr = [];
    const preOrder = (node) => {
        if (!node) return;
        arr.push(node);
        preOrder(node.left);
        preOrder(node.right);
    }
    preOrder(root);
    arr.forEach((item, index) => {
        item.left = null;
        item.right = index === arr.length - 1 ? null : arr[index + 1]
    })
};