const isPalindrome = (head) => {
    // 1. 设置结果
    let result = true;

    // 2. 递归
    const recursion = (head, queue = []) => {
        // 2.1 如果抵达链表尾
        if (!head) {
            return;
        }
        // 2.2 进入队列
        queue.push(head.val);
        // 2.3 进一步递归链表
        recursion(head.next, queue);
        // 2.3 出队列
        const linkHead = queue.shift();
        // 2.4 如果 1->2->3 和倒序 3->2->1 不同
        if (linkHead !== head.val) {
            result = false;
        }
    }

    // 3. 调用递归
    recursion(head, []);
    // 4. 返回结果
    return result;
};

const head = {
    val: 1,
    // next: null,
    next: {
        val: 2,
        // next: null,
        next: {
            val: 2,
            next: {
                val: 4,
                next: null,
            },
        },
    }
};

console.log(isPalindrome(head));
