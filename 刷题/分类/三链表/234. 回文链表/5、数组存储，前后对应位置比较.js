var isPalindrome = function (head) {
    let arr = [], cur = head
    while (cur) {
        arr.push(cur.val)
        cur = cur.next
    }
    for (let i = 0, j = arr.length -1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false
        }
    }
    return true
};
