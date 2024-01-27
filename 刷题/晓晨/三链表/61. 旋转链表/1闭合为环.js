/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!k) return head
    let n = 0, cur = head, i = 0, prev = null;
    // 统计节点个数
    while (cur) {
        n ++;
        cur = cur.next;
    }
    if (n < 2 || !(k % n)) {
        return head;
    }
    cur = head;
    // 连成环
    while (cur) {
        if (cur.next) {
            cur = cur.next;
        } else {
            cur.next = head;
            break;
        }
    }
    cur = head;
    // 循环结束时，cur为新链表的头节点，
    while (i < (n - (k % n))) {
        i++;
        prev = cur;
        cur = cur.next;
    }
    prev.next = null;
    return cur
};