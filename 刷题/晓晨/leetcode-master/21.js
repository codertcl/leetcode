//方法1
var mergeTwoLists = function (l1, l2) {
  //递归终止 分隔到不能分割 也就是两个链表有一个的nxet不存在了 那就没法分割问题了 只能返回
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    //当前节点谁小，就让这个较小的节点的next和另一个链表继续递归合并
    l1.next = mergeTwoLists(l1.next, l2); //分隔成合并l1.next, l2的子问题
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

//方法2
var mergeTwoLists = function (l1, l2) {
  const prehead = new ListNode(-1); //虚拟头节点

  let prev = prehead;
  while (l1 != null && l2 != null) {
    //循环两个链表
    if (l1.val <= l2.val) {
      //小的节点接在prev的后面
      prev.next = l1;
      l1 = l1.next; //向后移动l1
    } else {
      prev.next = l2; //向后移动l2
      l2 = l2.next;
    }
    prev = prev.next; ////向后移动prev
  }

  prev.next = l1 === null ? l2 : l1; //两个链表一个遍历完，另一个可能还没遍历完，没遍历完的接上

  return prehead.next; //返回prehead.next
};
