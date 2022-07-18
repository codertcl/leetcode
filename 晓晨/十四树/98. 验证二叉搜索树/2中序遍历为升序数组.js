// //中序遍历:
// var inorderTraversal = function (root, res = []) {
//     if (!root) return res;
//     inorderTraversal(root.left, res);
//     res.push(root.val);
//     inorderTraversal(root.right, res);
//     return res;
// };

// 迭代解法
var inorderTraversal = function(root) {
    if (!root) return []
    const res = [], stack = []
    let curr = root
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        const node = stack.pop()
        res.push(node.val)
        curr = node.right
    }
    return res
};

var isValidBST = function (root) {
    let arr = inorderTraversal(root)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) return false
    }
    return true
};

