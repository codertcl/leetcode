//方法1
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    const left = maxDepth(root.left); //递归左子树
    const right = maxDepth(root.right); //递归右子树
    return Math.max(left, right) + 1; //1加左节点和有节点深度的较大者
  }
};

//方法2
const maxDepth = (root) => {
  if (root == null) return 0;
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    // 当前层的节点个数
    const levelSize = queue.length;
    // 逐个让当前层的节点出列
    for (let i = 0; i < levelSize; i++) {
      // 当前出列的节点
      const cur = queue.shift();
      // 左右子节点入列
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    // 当前层所有节点已经出列，如果队列不为空，说明有下一层节点，depth+1
    if (queue.length) depth++;
  }
  return depth;
};
