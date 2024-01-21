var addTwoNumbers = function (l1, l2) {
  let head = null,
    tail = null;
  let carry = 0;
  while (l1 || l2) {
    //循环l1,l2链表
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry; //两链表节点相加在加进位
    if (!head) {
      head = tail = new ListNode(sum % 10); //当没有节点的时候新建节点
    } else {
      tail.next = new ListNode(sum % 10); //有节点的时候则加入tail节点的后面
      tail = tail.next;
    }
    carry = Math.floor(sum / 10); //求进位
    if (l1) {
      //移动l1指针
      l1 = l1.next;
    }
    if (l2) {
      //移动l2指针
      l2 = l2.next;
    }
  }
  if (carry > 0) {
    //最后一位节点是否有进位
    tail.next = new ListNode(carry);
  }
  return head;
};
