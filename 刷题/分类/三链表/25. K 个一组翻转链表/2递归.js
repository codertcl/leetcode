/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    //反转左开右闭区间[a,b),b前面一个已经为反转区间的最后一个节点
    const reverse = (a, b) => {
        let cur = a, next, prev = null
        while (cur !== b) {
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        //反转后的头部
        return prev
    }

    let a = head, b = head
    for (let i = 0; i < k; i++) {
        //b为空表示 剩下的节点不足k个，不用反转
        if (!b) return head
        b = b.next
    }
    // 反转前 k 个元素
    let newHead = reverse(a, b);
    //链接剩下的链表 a为之前反转过的部分的最后一个节点
    a.next = reverseKGroup(b, k);
    return newHead;
};
