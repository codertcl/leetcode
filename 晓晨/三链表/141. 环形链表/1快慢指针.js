var hasCycle = function (head) {
    let slow = head, fast = head
    //快指针走到末尾时停止 没环，则快指针先为null 且下面进行了.next.next所以要判断.next是否为空
    while (fast.next && fast) {
        slow = slow.next
        fast = fast.next.next
        //有环 则slow和fast不会为空 且 fast和slow总会相遇
        if (slow === fast) {
            return true
        }
    }
    return false
};
