// var inorderTraversal = function (root, res = []) {
//     if (!root) return res
//     inorderTraversal(root.left, res)
//     res.push(root.val)
//     inorderTraversal(root.right, res)
//     return res
// };


//wrong
var inorderTraversal = function (root) {
    let res = []
    if (!root) return res
    let stack = [root]
    while (stack.length) {
        let node = stack.pop()
        node.right && stack.push(node.right)
        res.push(node.val)
        node.left && stack.push(node.left)
    }
    return res;
};