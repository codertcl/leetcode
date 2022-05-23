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
var middleNode = function (head) {
    let p = head, q = head
    //注意判断条件为p和p.next都不为空
    while (p && p.next) {
        p = p.next.next
        q = q.next
    }
    return q
};
