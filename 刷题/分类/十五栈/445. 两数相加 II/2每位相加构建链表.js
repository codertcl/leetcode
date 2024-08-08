class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var addTwoNumbers = function(l1, l2) {
    let s1 = [],s2 = [];
    while (l1 || l2) {
         if (l1) {
           s1.push(l1.val);
           l1=l1.next;
         }
        if(l2) {
          s2.push(l2.val);
          l2=l2.next;
        }
    }
    //使用BigInt类型，避免s显示为科学计数法
    let listHead = null, carry = 0;
    while (s1.length || s2.length || !carry) {
        let v1 = s1.length ? s1.pop() : 0;
        let v2 = s2.length ? s2.pop() : 0;
        let val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        let cur = new ListNode(val);
        cur.next = listHead;
        listHead = cur;
    }
    return listHead;
};

console.log(addTwoNumbers([2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
    [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]));