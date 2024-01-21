/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//时间复杂度O(m+n) 空间复杂度O(1)
var getIntersectionNode = function (headA, headB) {
    if (!headB || !headA) return null
    let p = headA, q = headB
    while (p !== q) {
        p = p === null ? headB : p.next
        q = q === null ? headA : q.next
    }
    //将两个链表拼接起来，pq走的步数相同，最多进行O(m+n)次判断即可得出结果
    //有环则p为交点，没环则p为null
    return p
};
