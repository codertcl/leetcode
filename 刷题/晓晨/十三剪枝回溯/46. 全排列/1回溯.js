const permute = (nums) => {
    const res = [], path = [], used = {};

    function dfs() {
        if (path.length === nums.length) { // 个数选够了
            // 因为该 path 变量存的是地址引用，结束当前递归时，将它加入 res 后，该算法还要进入别的递归分支继续搜索，
            // 还要继续将这个 path 传给别的递归调用，它所指向的内存空间还要继续被操作，所以 res 中的 path 的内容会被改变，这就不对。
            // 所以要弄一份当前的拷贝，放入 res，这样后续对 path 的操作，就不会影响已经放入 res 的内容。
            res.push([...path]);
            return;                 // 结束当前递归分支
        }
        for (const num of nums) { // for枚举出每个可选的选项
            // if (path.includes(num)) continue; // 别这么写！查找是O(n)，增加时间复杂度
            if (used[num]) continue; // 使用过的，跳过
            path.push(num);         // 选择当前的数，加入path
            used[num] = true;       // 记录一下 使用了
            dfs(path);              // 基于选了当前的数，递归
            path.pop();             // 上一句的递归结束，回溯，将最后选的数pop出来
            used[num] = false;      // 撤销这个记录
        }
    }

    dfs(); // 递归的入口，空path传进去
    return res;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
