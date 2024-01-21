var reverseList = function (head) {
    let arr = [], cur = head
    while (cur) {
        arr.push(cur.val)
        cur = cur.next
    }
    arr = arr.reverse()
    let newHead = new ListNode()
    let tmp = newHead
    for (let i = 0; i < arr.length; i++) {
        tmp.next =  new ListNode(arr[i])
        tmp = tmp.next
    }
    return newHead.next
};