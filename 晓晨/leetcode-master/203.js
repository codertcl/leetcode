//方法1
var removeElements = function (head, val) {
  if (head === null) {
    //递归终止 遍历完了链表
    return head;
  }
  head.next = removeElements(head.next, val); //递归调用函数removeElements
  return head.val === val ? head.next : head; //如果当前元素值是val，则返回下一个元素，否则直接返回当前元素
};

//方法2
var removeElements = function(head, val) {
  const dummyHead = new ListNode(0);//创建dummy节点，将dummy节点的next指向head，temp指向dummy
  dummyHead.next = head;
  let temp = dummyHead;
  while (temp.next !== null) {//当temp的next不为null 不断循环节点
      if (temp.next.val == val) {
          temp.next = temp.next.next;//当temp的next值是要删除的 则删除该节点
      } else {
          temp = temp.next;//移动temp指针
      }
  }
  return dummyHead.next;
};