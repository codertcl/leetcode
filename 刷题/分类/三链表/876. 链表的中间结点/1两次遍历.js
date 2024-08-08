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
    let len = 0;
    for (let cur = head; cur !== null; cur = cur.next) {
        len++
    }
    let res = head, count = Math.floor(len / 2) + 1
    //注意res初始值已经为第一个节点
    while (--count > 0) {
        res = res.next
    }
    return res
};
