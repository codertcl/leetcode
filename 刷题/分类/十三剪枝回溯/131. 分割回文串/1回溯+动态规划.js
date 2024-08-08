var partition = function (s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (f[i][j]) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    const n = s.length;
    const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
    let ret = [], ans = [];

    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            // for (let i = 0; i < n - 1; i++) {
            //     for (let j = i + 1; j < n; ++j) {
            //由于要确定i到j是否为回文串，需要先判断i+1到j-1是否为回文串
            //所以要从后向前来判断回文串
            f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1];
        }
    }
    dfs(0);
    return ret;
};
console.log(partition('aab'))//[["a","a","b"],["aa","b"]]
console.log(partition('a')) // [['a']]
console.log(partition("abbab"))//[["a","b","b","a","b"],["a","b","bab"],["a","bb","a","b"],["abba","b"]]