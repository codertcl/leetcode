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
    let set = new Set(), cur = head
    while (cur) {
        if (set.has(cur)) return cur;
        set.add(cur);
        cur = cur.next;
    }
    return null;
};