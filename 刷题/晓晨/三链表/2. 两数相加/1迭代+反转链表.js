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

const reverseList = (head) => {
    if (!head || !head.next) return head;
    let cur = reverseList((head.next));
    head.next.next = head;
    head.next = null;
    return cur;
}
var addTwoNumbers = function (l1, l2) {
    if (!l1 || !l2) {
        return reverseList(l1 || l2);
    }
    let cur = null, flag = 0;
    while (l1 || l2 || flag) {
        let ans = (l1?.val || 0) + (l2?.val || 0) + flag;
        if (ans >= 10) {
            ans %= 10;
            flag = 1;
        } else {
            flag = 0
        }
        // 此处起到了反转链表的作用
        cur = new ListNode(ans, cur);
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }
    return reverseList(cur);
};