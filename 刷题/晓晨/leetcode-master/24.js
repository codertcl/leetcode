//方法1
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    //终止条件，必须要有两个节点
    return head;
  }
  const newHead = head.next; //反转后链表的头节点，
  head.next = swapPairs(newHead.next); //让当前递归层的head.next指向交换后返回的头节点
  newHead.next = head; //让反转后的新的头节点指向当前层的head的节点
  return newHead; //返回反转后的头节点
};

//方法2
var swapPairs = function (head) {
  const dummyHead = new ListNode(0); //虚拟头节点
  dummyHead.next = head; //初始的时候让虚拟头节点指向head，
  let temp = dummyHead; //temp指针
  while (temp.next !== null && temp.next.next !== null) {
    //循环条件，dummyHead后存在至少两个节点
    const node1 = temp.next; //node1指针，即dummyHead后的第一个节点
    const node2 = temp.next.next; //node2指针，即dummyHead后的第二个节点
    temp.next = node2; //下面三行是两两交换的核心代码
    node1.next = node2.next;
    node2.next = node1;
    temp = node1; //后移一个节点的位置
  }
  return dummyHead.next; //返回交换后的头节点
};
