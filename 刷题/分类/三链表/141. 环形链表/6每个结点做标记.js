const hasCycle = function (head) {
    let node = head
    while (node) {
        //存在标记为true 则表示有环
        if (node.tag) return true
        //访问过的节点做标记
        node.tag = true
        node = node.next
    }
    return false;
};
