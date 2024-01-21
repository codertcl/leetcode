// reduce，将链表数组中的每一个值放入新数组
// sort，以链表的val作参考冒泡排序
// reduceRight，从右向左遍历，将数组连成链表
var mergeKLists = function (lists) {
    return lists.reduce((p, n) => {
        while (n) {
            p.push(n);
            n = n.next
        }
        return p
    }, [])//前面部分返回数组
        .sort((a, b) => a.val - b.val)//数组升序排列
        .reduceRight((p, n) => {
            n.next = p;//n从后向前遍历 最后返回第一个元素
            return n//下一次循环的p的值即为n
        }, null)
};
