//方法1
const serialize = (root) => {
  if (root == null) {
    //遇到null 返回‘X’进行标示
    return "X";
  }
  const left = serialize(root.left); //序列化左子树
  const right = serialize(root.right); //序列化右子树
  return root.val + "," + left + "," + right; //按根,左,右 返回字符串
};

const deserialize = (data) => {
  const list = data.split(","); //字符串转数组

  const buildTree = (list) => {
    //构建树
    const rootVal = list.shift(); //第一个元素
    if (rootVal == "X") {
      //如果是X，返回null
      return null;
    }
    const root = new TreeNode(rootVal); //如果不是X就创建节点
    root.left = buildTree(list); //构建左子树
    root.right = buildTree(list); //构建右子树
    return root; //返回构建的节点
  };

  return buildTree(list);
};

//方法2
const serialize = (root) => {
  const queue = [root];
  let res = [];
  while (queue.length) {
    const node = queue.shift(); //出队
    if (node) {
      //node存在 推入根左右
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      //如果不存在 推入‘x’
      res.push("X");
    }
  }
  return res.join(","); //数组转成字符串
};

const deserialize = (data) => {
  if (data == "X") return null;

  const list = data.split(","); //字符串转数组

  const root = new TreeNode(list[0]); //从队首开始构建
  const queue = [root]; //根节点加入队列
  let cursor = 1; //遍历到了第几个节点

  while (cursor < list.length) {
    //当队列没遍历完时
    const node = queue.shift(); //出队

    const leftVal = list[cursor]; //左节点的值
    const rightVal = list[cursor + 1]; //右节点的值

    if (leftVal != "X") {
      //不是空节点
      const leftNode = new TreeNode(leftVal); //构建左节点
      node.left = leftNode; //左节点挂在父节点的left下
      queue.push(leftNode); //自己入列 构建以自己为根的子树
    }
    if (rightVal != "X") {
      const rightNode = new TreeNode(rightVal);
      node.right = rightNode;
      queue.push(rightNode);
    }
    cursor += 2; //构建的节点数+2
  }
  return root; //返回根
};
