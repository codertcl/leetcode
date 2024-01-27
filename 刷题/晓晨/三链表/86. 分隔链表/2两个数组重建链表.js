/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// https://leetcode.cn/problems/partition-list/solutions/544705/lian-tou-shu-zu-shuang-zhi-zhen-7xing-da-baxz/
var partition = function (head, x) {
    if (!head) return head
    let a = [], b = [], cur = head, newH = new ListNode(0);
    while (cur) {
        cur.val < x ? a.push(cur) : b.push(cur);
        cur = cur.next
    }
    if (!a.length) return b[0]
    cur = newH
    for (let i = 0; i < a.length; i++) {
        cur = cur.next = new ListNode(a[i].val)
    }
    for (let i = 0; i < b.length; i++) {
        cur = cur.next = new ListNode(b[i].val)
    }
    return newH.next
};