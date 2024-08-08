var partition = function(head, x) {
    let a = [], b = [], i = 0
    while (head) {
        head.val < x ? a.push(head) : b.push(head)
        head = head.next
    }
    if (a.length === 0) return b[0] || head
    while (++i <= a.length) a[i - 1].next = a[i] || b[0] || null
    for (i = 1; i <= b.length; i++) b[i - 1].next = b[i] || null
    return a[0]
};