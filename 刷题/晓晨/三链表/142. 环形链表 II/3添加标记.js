var detectCycle = function (head) {
    if (!head || !head.next) return null;
    let cur = head;
    while (cur) {
        if (cur.visited) return cur;
        cur.visited = true;
        cur = cur.next;
    }
    return null;
};