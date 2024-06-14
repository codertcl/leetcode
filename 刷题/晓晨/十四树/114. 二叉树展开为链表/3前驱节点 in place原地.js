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
// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/solutions/356853/er-cha-shu-zhan-kai-wei-lian-biao-by-leetcode-solu/
// 左子树的最下最右的节点，是右子树的父节点
// 时间复杂度O(N)：对每个节点进行了处理 空间复杂度 O(1)
var flatten = function (root) {
  let cur = root;
  while (cur) {
      if (cur.left) {
          const next = cur.left;// 暂存便于后续赋值和初始化
          let pre = next;
          while (pre.right) {
              pre = pre.right;
          }
          pre.right = cur.right; // 当前节点的右节点作为最右边的节点
          cur.left = null; // 当前节点的左子节点置空
          cur.right = next;// 左子节点转换为右子节点
      }
      // 迭代对当前节点的右子节点进行上述操作
      cur = cur.right;
  }
};