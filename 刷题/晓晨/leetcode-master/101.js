var isSymmetric = function (root) {
  if (!root) return true;
  const isMirror = (l, r) => {
    if (!l && !r) return true; //两个空节点也为镜像
    if (
      l &&
      r &&
      l.val === r.val && //左节点和右节点相同，左子树和右子树也对称则返回true
      isMirror(l.left, r.right) &&
      isMirror(l.right, r.left)
    ) {
      return true;
    }
    return false;
  };
  return isMirror(root.left, root.right);
};

function isSymmetric(root) {
  const isMirror = (l, r) => {
    const queue = [l, r];
    while (queue.length) {
      const u = queue.shift();
      const v = queue.shift();
      if (!u && !v) continue; //两个空节点也为镜像
      //左右节点只有一个节点为空，或者值不相同返回false
      if (!u || !v || u.val !== v.val) return false;
      queue.push(u.left, v.right); //加入左节点的左子树，右节点的右子树
      queue.push(v.left, u.right); //加入右节点的左子树，左节点的右子树
    }
    return true;
  };
  return isMirror(root.left, root.right);
}
