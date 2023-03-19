//方法1
var hasCycle = (head) => {
  let map = new Map();
  while (head) {
    if (map.has(head)) return true; //如果当前节点在map中存在就说明有环
    map.set(head, true); //否则就加入map
    head = head.next; //迭代节点
  }
  return false; //循环完成发现没有重复节点，说明没环
};

//方法2
const hasCycle = (head) => {
  // 至少 2 个节点才能构成一个环
  if (!head || !head.next) {
    return false;
  }

  // 设置快慢指针
  let slow = head;
  let fast = head.next;

  // 如果快指针一直没有追上慢指针
  while (slow !== fast) {
    // 如果没有环，则快指针会抵达终点
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  // 如果有环，那么快指针会追上慢指针
  return true;
};
