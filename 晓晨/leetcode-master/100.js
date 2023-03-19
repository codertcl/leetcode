//方法1
var isSameTree = function (p, q) {
  if (p == null && q == null)
    //都是null表示相同
    return true;
  if (p == null || q == null)
    //只有一个是null表示不同
    return false;
  if (p.val != q.val)
    //节点的值不同
    return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); //递归左右子树
};

//方法2
var isSameTree = function (p, q) {
  let pQ = [p],
    qQ = [q],
    res = true;

  while (pQ.length) {
    pNode = pQ.shift();
    qNode = qQ.shift();

    if (pNode === null && qNode === null) {
      res = true;
    } else if (pNode === null || qNode === null) {
      res = false;
      break;
    } else {
      if (pNode.val !== qNode.val) {
        res = false;
        break;
      } else {
        pQ.push(pNode.left);
        pQ.push(pNode.right);

        qQ.push(qNode.left);
        qQ.push(qNode.right);
      }
    }
  }

  return res;
};
