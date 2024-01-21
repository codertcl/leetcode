/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 链表只有一个节点的时候反转也是它自己，直接返回即可
    if (head == null || head.next == null) {
        return head;
    }
    // 这里是head.next
    let cur = reverseList(head.next);
    head.next.next = head;
    // 当链表递归反转之后，新的头节点是last，而之前的head变成了最后一个节点，别忘了链表的末尾要指向 null
    head.next = null;
    return cur;
};
