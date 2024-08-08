/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//时间复杂度O(m*n) 空间复杂度O(1)
var getIntersectionNode = function (headA, headB) {
    let p = new ListNode(0), q = null
    p.next = headA;
    while (p) {
        //注意q重新创建 并指定其next,此处q可能为空
        q = new ListNode(0)
        q.next = headB
        while (q) {
            if (p.next === q.next) {
                return p.next
            }
            q = q.next
        }
        p = p.next
    }
    return null
};
