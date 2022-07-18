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
 * @return {number[]}
 */
// 时间复杂度O(n),n为节点个数，空间复杂度O(n)，即递归的空间开销(树的高度)
// 最坏的情况下树是链表，所以是O(n)，平均空间复杂度O(logn)
//前序遍历:
// var preorderTraversal = function (root) {
//     const res = []
//     const preOrder = (root) => {
//         if (!root) return
//         res.push(root.val)
//         preOrder(root.left)
//         preOrder(root.right)
//     }
//     preOrder(root)
//     return res
// };
var preorderTraversal = function(root, res = []) {
    if (!root) return res;
    res.push(root.val);
    preorderTraversal(root.left, res)
    preorderTraversal(root.right, res)
    return res;
};

//中序遍历:
var inorderTraversal = function(root, res = []) {
    if (!root) return res;
    inorderTraversal(root.left, res);
    res.push(root.val);
    inorderTraversal(root.right, res);
    return res;
};

//后序遍历:
var postorderTraversal = function(root, res = []) {
    if (!root) return res;
    postorderTraversal(root.left, res);
    postorderTraversal(root.right, res);
    res.push(root.val);
    return res;
};
