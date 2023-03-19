const levelOrderBottom = (root) => {
  if (root == null) {
    return [];
  }
  const queue = [];
  queue.push(root);
  const res = [];

  while (queue.length) {
    const subRes = [];
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      subRes.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    res.unshift(subRes); //和102不一样的地方 推入res中的方向正好相反
  }
  return res;
};
