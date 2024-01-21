//方法1
var minDepth = function (root) {
  if (root == null) {
    return 0;
  }
  if (root.left == null && root.right == null) {
    //遍历到叶子结点终止
    return 1;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  if (root.left != null) {
    ans = Math.min(minDepth(root.left), ans); //递归左子树，找到左子树的最小深度
  }
  if (root.right != null) {
    ans = Math.min(minDepth(root.right), ans); //递归右子树，找到右子树的最小深度
  }
  return ans + 1; //最小深度等于左右子树最小深度+1
};

//方法2:
var minDepth = function(root) {
    if(root == null) return 0;
    let q = [root];
    //root本身就是一层，所以深度初始化为1
    let depth = 1;
    while(q.length){
        let len = q.length;
        //将当前队列向四处扩散
        for(let i=0; i<len; i++){
            let curr = q.shift();
            //判断是当前否是叶子节点
            if(curr.left == null && curr.right == null){
                return depth;
            }
            //如果不是叶子结点，就将其相邻节点加入队列
            if(curr.left){
                q.push(curr.left);
            }
            if(curr.right){
                q.push(curr.right);
            }
        }
        depth++;
    }
    return depth;

};


