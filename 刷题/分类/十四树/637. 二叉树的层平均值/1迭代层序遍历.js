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
  const res = [], queue = [root];
  while (queue.length) {
      const count = queue.length, curLevel = [];
      for (let i = 0; i < count; i++) {
          const node = queue.shift()
          curLevel.push(node.val);
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
      res.push(curLevel.reduce((a, b) => a + b) / curLevel.length)
  }
  return res;
};