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
 * @return {boolean}
 */

    //节点右子树上每个结点值都要大于根节点
    //节点左子树上每个结点值都要小于根节点
//    wrong 不满足上述条件
// var isValidBST = function (root) {
//         if (!root) return true;
//         if (root.left && root.val <= root.left.val) return false
//         if (root.right && root.val >= root.right.val) return false
//         return isValidBST(root.left) && isValidBST(root.right)
//     };
const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {//终止条件 不满足二叉搜索树的性质
        return false;
    }
    //递归左右子树
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function (root) {
    //定义low=-Infinity，让所有值都大于low
    //定义upper=Infinity，让所有值都小于upper
    return helper(root, -Infinity, Infinity);
};

