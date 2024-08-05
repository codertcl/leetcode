var swapPairs = function (head) {
    if (!head || !head.next) return head;
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let tmp = dummyHead;
    while (tmp.next && tmp.next.next) {
        const node1 = tmp.next;
        const node2 = tmp.next.next;
        tmp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        tmp = node1
    }
    return dummyHead.next;
};
