var isPalindrome = function (head) {
    let a = "", b = "", cur = head
    while (cur) {
        a += cur.val
        b = cur.val + b;
        cur = cur.next
    }
    return a === b;
};
