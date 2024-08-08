/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let map = new Map(), cur = head
    while (cur) {
        if (map.has(cur)) return cur;
        map.set(cur, cur);
        cur = cur.next;
    }
    return null;
};