var mergeTwoLists = function (list1, list2) {
    let cur = new ListNode()
    let head =cur
    if (!list1 || !list2) return list1 || list2
    if (list1.val > list2.val) {
        cur.next = list2
        cur = cur.next
        cur.next = mergeTwoLists(list1, list2.next)
    } else {
        cur.next = list1
        cur = cur.next
        cur.next = mergeTwoLists(list1.next, list2)
    }
    //head为头结点 所以返回其next
    return head.next
};