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
    const map = new Map();
    inorder.forEach((item, index) => {
        map.set(item, index);
    })

    const fun = (preL, preR, inL, inR) => {
        if (preL === preR) return null;
        // 先找到 根节点在中序遍历数组中的下标，便于计算左子树的长度
        const size = map.get(preorder[preL]) - inL;
        const left = fun(preL + 1, preL + 1 + size, inL, inL + size);
        const right = fun(preL + 1 + size, preR, inL + 1 + size, inR);
        return new TreeNode(preorder[preL], left, right);
    }
    return fun(0, inorder.length, 0, inorder.length)
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))