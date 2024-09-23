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
var averageOfLevels = function(root) {
  if (!root) return [];
  const res = [];
  const fun = (root, step) => {
    if (!root) return;
    if (!res[step]) res[step] = [];
    res[step].push(root.val);
    fun(root.left, step + 1);
    fun(root.right, step + 1);
  }
  fun(root, 0);
  res.forEach((item, index) => {
    res[index] = item.reduce((a, b) => a + b) / item.length;
  })
  return res;
};