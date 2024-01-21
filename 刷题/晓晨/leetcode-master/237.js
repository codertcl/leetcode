var deleteNode = function (node) {
  node.val = node.next.val; //将要删除节点的下一个节点的值覆盖自己的值Ï
  node.next = node.next.next; //让当前节点指向下一个节点的next
};
