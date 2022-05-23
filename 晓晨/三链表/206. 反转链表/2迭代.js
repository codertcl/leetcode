var reverseList = function (head) {
    let prev = null, cur = head, next = null
    while (cur) {
        //获取下一个节点
        next = cur.next
        //反向next指针
        cur.next = prev
        //prev和next向后迭代
        prev = cur
        cur = next
    }
    return prev
};
