//法1
var reverseBetween = function (head, left, right) {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head; //虚拟头节点

  let pre = dummyNode;
  for (let i = 0; i < left - 1; i++) {
    //pre遍历到left的前一个节点
    pre = pre.next;
  }

  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    //rightNode遍历到right的位置
    rightNode = rightNode.next;
  }

  let leftNode = pre.next; //保存leftNode
  let curr = rightNode.next; //保存rightNode.next

  //切断left到right的子链
  pre.next = null;
  rightNode.next = null;

  //206题的逻辑 反转left到right的子链
  reverseLinkedList(leftNode);

  //返乡连接
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};

const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
};

//法2
var reverseBetween = function (head, left, right) {
  const dummy_node = new ListNode(-1);
  dummy_node.next = head; //虚拟头节点
  let pre = dummy_node;
  for (let i = 0; i < left - 1; ++i) {
    //pre前进到left的前一个节点
    pre = pre.next;
  }

  let cur = pre.next;
  for (let i = 0; i < right - left; ++i) {
    //循环right - left次 反转中间的节点
    const next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return dummy_node.next; //返回虚拟头节点的next
};
