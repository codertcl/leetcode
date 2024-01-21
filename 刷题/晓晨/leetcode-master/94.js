//方法1
var inorderTraversal = function (root, res = []) {
  if (!root) return res;
  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right, res);
  return res;
};

//方法2
var inorderTraversal = function (root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
    if (node.right) stack.push(node.right); // 右
    stack.push(node); // 中
    stack.push(null);
    if (node.left) stack.push(node.left); // 左
  }
  return res;
};
