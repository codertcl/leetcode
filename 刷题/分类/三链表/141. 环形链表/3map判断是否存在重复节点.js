var hasCycle = function (head) {
    let map = new Map(), cur = head
    while (cur) {
        if (map.has(cur)) return true
        map.set(cur, cur)
        cur = cur.next
    }
    return false
};

