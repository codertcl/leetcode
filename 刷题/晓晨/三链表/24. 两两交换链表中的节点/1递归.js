var swapPairs = function (head) {
    if (!head || !head.next) return head;
    const tmp = head.next.next;
    const tmp2 = head.next;
    head.next.next = head;
    head.next = swapPairs(tmp);
    return tmp2;
};
