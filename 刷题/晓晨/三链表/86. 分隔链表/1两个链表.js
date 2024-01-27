/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// https://leetcode.cn/problems/partition-list/solutions/544705/lian-tou-shu-zu-shuang-zhi-zhen-7xing-da-baxz/
var partition = function(head, x) {
  let p1 = a  = new ListNode(0), p2= b  = new ListNode(0)
  while (head) {
      head.val < x ? a = a.next = head : b = b.next = head
      head = head.next
  }
  a.next = p2.next;
  b.next = null // 实际b是最后一个节点了，但其next仍可能不为null
  return p1.next
};