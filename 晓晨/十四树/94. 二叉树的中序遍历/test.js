// var preorderTraversal = function (root) {
//     let res = []
//     const dfs = (root) => {
//         if (!root) return;
//         res.push(root.val)
//         dfs(root.left)
//         dfs(root.right)
//     }
//     dfs(root)
//     return res;
// };

// var preorderTraversal = function (root, res = []) {
//     if (!root) return;
//     res.push(root.val)
//     preorderTraversal(root.left, res)
//     preorderTraversal(root.right, res)
//     return res;
// };

////不能使用队列及shift(),SHIFT是去除第一个元素，则会依次遍历根节点、
// 根的左右节点而不是继续遍历根左节点的左节点
// var preorderTraversal = function (root) {
//     let res = []
//     if (!root) return res;
//     let queue = [root]
//     while (queue.length) {
//         let node = queue.shift()
//         res.push(node.val)
//         node.left&&queue.push(node.left)
//         node.right&&queue.push(node.right)
//     }
//     return res;
// };

var preorderTraversal = function (root) {
    let res = []
    if (!root) return res;
    let stack = [root]
    while (stack.length) {
        //取出最后一个元素
        let node = stack.pop()
        res.push(node.val)
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return res;
};