//方法1
var reverseList = function (head) {
  let temp = new ListNode();
  let next = null;
  while (head) {
    next = head.next; //下一个节点
    head.next = temp.next;
    temp.next = head; //head接在temp的后面
    head = next; //head向后移动一位
  }
  return temp.next;
};

//方法2
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr !== null) {
    next = curr.next; //next向后移动一位
    curr.next = prev; //让当前指针curr.next指向前一个指针prev
    prev = curr; //prev向后移动一位
    curr = next; //curr向后移动一位
    //[curr.next, prev, curr] = [prev, curr, curr.next]
  }
  return prev;
};

//方法3
var reverseList = function (head) {
  if (head == null || head.next == null) {
    //递归终止条件
    return head;
  }
  const newHead = reverseList(head.next); //递归调用reverseList
  head.next.next = head; //到了递归最后一层的时候，让后面一个节点指向前一个节点
  head.next = null; //前一个节点的next置为空
  return newHead; //返回最后一个节点
};
