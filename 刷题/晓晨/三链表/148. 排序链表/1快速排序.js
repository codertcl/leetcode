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
var sortList = function (head) {
    if (!head || !head.next) return head;
    const arr = [];
    while (head) {
        arr.push(head.val)
        head = head.next;
    }
    arr.sort((a, b) => a - b);
    let newHead = new ListNode();
    let cur = newHead;
    for (const node of arr) {
        cur.next = new ListNode(node)
        cur = cur.next;
    }
    return newHead.next;
};
