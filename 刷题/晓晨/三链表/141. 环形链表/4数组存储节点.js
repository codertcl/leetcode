var hasCycle = function (head) {
    let arr = [], cur = head
    while (cur) {
        if (arr.includes(cur))
            return true
        arr.push(cur)
        cur = cur.next
    }
    return false
};
