/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;
    let prev= cur  = new ListNode(0, head);
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const val = cur.next.val
            while (cur.next && cur.next.val === val) {
                // 跳过中间节点，至少执行一次
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next
        }
    }
    // prev是前置节点
    return prev.next;
};