/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//时间复杂度度为O(n) 空间复杂度O(1)
var isPalindrome = function (head) {
    let s = "", cur = head
    while (cur) {
        s += cur.val
        cur = cur.next
    }
    return s.split('').reverse().join('') === s
};
