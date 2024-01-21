/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  const newHead = head.next;
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
};