var pathSum = function(root, targetSum) {
    if (root == null) {
        return 0;
    }

    let ret = rootSum(root, targetSum);//以root为根节点的树中寻找路径
    ret += pathSum(root.left, targetSum);//递归左子树，在左子树中寻找路径
    ret += pathSum(root.right, targetSum);//递归右子树，在左子树中寻找路径
    return ret;
};

const rootSum = (root, targetSum) => {
    let ret = 0;

    if (root == null) {
        return 0;
    }
    const val = root.val;
    if (val === targetSum) {
        ret++;
    }

    //以root.left为根节点，targetSum - val为寻找的路径和，继续寻找路径
    ret += rootSum(root.left, targetSum - val);
    //以root.right为根节点，targetSum - val为寻找的路径和，继续寻找路径
    ret += rootSum(root.right, targetSum - val);
    return ret;
}
