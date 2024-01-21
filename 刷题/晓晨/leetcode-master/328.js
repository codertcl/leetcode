var oddEvenList = function (head) {
  if (head === null) {
    return head;
  }
  let evenHead = head.next;
  let odd = head,
    even = evenHead;
  while (even !== null && even.next !== null) {
    //偶数指针不为空 继续循环
    odd.next = even.next; //奇数指针指向偶数指针的next
    odd = odd.next; //移动奇数指针
    even.next = odd.next; //偶数指针指向奇数指针的next
    even = even.next; //移动偶数指针
  }
  odd.next = evenHead; //奇数指针结尾连接上偶数指针的开始
  return head;
};
