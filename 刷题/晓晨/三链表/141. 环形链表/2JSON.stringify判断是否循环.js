var hasCycle = function (head) {
    try {
        //存在循环结构则报错
        JSON.stringify(head)
    } catch {
        return true
    }
    return false
};
