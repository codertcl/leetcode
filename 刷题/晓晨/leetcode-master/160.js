var getIntersectionNode = function (headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp !== null) {
    //将链表A存入set中
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
    if (visited.has(temp)) {
      //第一个相同的节点就是重合的节点
      return temp;
    }
    temp = temp.next;
  }
  return null;
};

var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next; //链表A循环结束就循环链表B
    pB = pB === null ? headA : pB.next; //链表A循环结束就循环链表B
  }
  return pA; //当pA == pB时就是交点
};
