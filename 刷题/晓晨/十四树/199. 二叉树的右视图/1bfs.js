// var rightSideView = function (root) {
//     const res = []
//     if (!root) return res
//     const queue = [root]
//     while (queue.length) {
//         let len = queue.length
//         //arr存储每层的节点
//         let arr = []
//         for (let i = 0; i < len; i++) {
//             let node = queue.shift()
//             arr.push(node.val)
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//         //存储每层的最后一个节点
//         res.push(arr[arr.length - 1])
//     }
//     return res;
// };

var rightSideView = function (root) {
    if (!root) return []
    const queue = [root], arr = [];
    while (queue.length) {
        let len = queue.length;
        while (len) {
            let node = queue.shift()
            //node为当前层最后一个节点 即最右边的节点
            if (len === 1) arr.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            len--
        }
    }
    return arr
}