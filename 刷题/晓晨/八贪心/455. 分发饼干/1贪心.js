var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b); //排序数组
    let result = 0;
    let index = s.length - 1;
    //将小孩胃口和饼干大小从大到小排列，
    for (let i = g.length - 1; i >= 0; i--) {
        //从胃口大的小孩开始满足
        if (index >= 0 && s[index] >= g[i]) {
            result++; //结果加1
            index--;//判断次大的饼干
        }
    }
    return result;
};

console.log(findContentChildren([1, 2, 3], [1, 1]))//1
console.log(findContentChildren([1, 2], [1, 2, 3]))//2
