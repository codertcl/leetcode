const hasCycle = function(head) {
    let i = 0, size = 100000
    let node = head
    while (++i <= size) {
        if(!node) return false
        node = node.next
    }
    return true;
};


try {
    
}catch (e) {
    
}