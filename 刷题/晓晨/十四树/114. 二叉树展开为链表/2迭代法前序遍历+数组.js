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
var flatten = function (root) {
    const arr = [], stack = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            arr.push(node);
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }
    arr.forEach((item, index) => {
        item.left = null;
        item.right = index === arr.length - 1 ? null : arr[index + 1]
    })
};