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
// 时间复杂度：O(m+n)O(m+n)，其中 mm 和 nn 是分别是链表headA 和 headB 的长度。需要遍历两个链表各一次。
//
// 空间复杂度：O(m)O(m)，其中 mm 是链表 headA 的长度。需要使用哈希集合存储链表headA 中的全部节点。
var getIntersectionNode = function (headA, headB) {
    let p = new ListNode(0), q = new ListNode(0), map = new Map()
    p.next = headA;
    q.next = headB
    while (p) {
        map.set(p, p)
        p = p.next
    }
    while (q) {
        if (map.has(q)) return q
        q = q.next
    }
    return null
};
