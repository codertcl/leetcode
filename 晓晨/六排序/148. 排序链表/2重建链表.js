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
    let cur = head, arr
    while (cur) {
        arr.push(cur)
        cur = cur.next
    }
    arr = arr.sort((a, b) => a - b)
    let tmp = new ListNode()
    let p = tmp
    for (let i = 0; i < arr.length; i++) {
        p.next = arr[i]
        p = p.next
    }
    return tmp.next
};
