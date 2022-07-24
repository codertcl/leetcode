var isSameTree = function (p, q) {
    let arr1 = [p], arr2 = [q], res = true
    // arr1.length && arr2.length  arr1.length || arr2.length
    // arr2.length都可
    while (arr1.length ) {
        let n1 = arr1.shift(), n2 = arr2.shift()
        //都为空 目前res更改为true ,不能直接返回true
        // 可能只是p q的左子树同时为空,但不能保证二者右子树一致
        if (!n1 && !n2) res = true
        // 只有一个为空 false
        else if (!n1 || !n2) {
            return false;
        }
        //都不为空
        else {
            //两个值不等 false
            if (n1.val !== n2.val) {
                return false;
            } else {
                //两个值相等
                arr1.push(n1.left)
                arr1.push(n1.right)
                arr2.push(n2.left)
                arr2.push(n2.right)
            }
        }
    }
    return res
}
