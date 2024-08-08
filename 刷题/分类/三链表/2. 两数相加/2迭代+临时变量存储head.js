/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = null, tail = null, flag = 0;
    while (l1 || l2 || flag) {
        let ans = (l1?.val || 0) + (l2?.val || 0) + flag;
        if (ans >= 10) {
            ans %= 10;
            flag = 1;
        } else {
            flag = 0
        }
        if (!head) {
            head = tail = new ListNode(ans)
        } else {
            tail.next = new ListNode(ans);
            tail = tail.next;
        }
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }
    return head;
};