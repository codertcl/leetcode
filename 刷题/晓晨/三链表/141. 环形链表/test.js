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
var getIntersectionNode = function (headA, headB) {
    const map = new Map()
    let cur = headA;
    while (cur) {
        map.set(cur, cur)
        cur = cur.next
    }
    cur = headB;
    while (cur) {
        if (map.has(cur)) return cur
        cur = cur.next
    }
    return null
};