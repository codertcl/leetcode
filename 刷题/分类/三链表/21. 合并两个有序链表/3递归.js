var mergeTwoLists = function (l1, l2) {
    if (!l2 || !l1) return l1 || l2;
    let cur = undefined;
    if (l1.val <= l2.val) {
        cur = new ListNode(l1.val);
        cur.next = mergeTwoLists(l1.next, l2)
    } else {
        cur = new ListNode(l2.val);
        cur.next = mergeTwoLists(l1, l2.next)
    }
    return cur;
};