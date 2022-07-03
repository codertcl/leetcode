var findAnagrams = function (s, p) {
    //res：返回的结果
    //win：存储窗口中的字符和对应的频次
    //need：存储需要的异位词的种类和数量
    //len：need异位词的字符种类
    //val：滑动窗口中和need中字符数量相同的字符种类
    const res = [], win = {}, need = {}, pLen = p.length;
    let len = 0, val = 0;
    for (const x of p) {//循环p
        //如果字符在need中不存在 则初始化need数组中对应的字符数量 并且让字符种类加1
        if (need[x] === undefined) {
            need[x] = win[x] = 0;
            len++;
        }
        need[x]++;//need中存在该字符 则字符数量加1
    }
    for (let i = 0; i < s.length; i++) {
        //i为2 pLen为3 左边界j为-1+1=0
        const j = i - pLen;//滑动窗口左边界
        //如果进入滑动窗口的字符s[i]在need中，并且窗口中的该字符数量加1之后和need中的字符数量相同，
        //说明该字符已经满足了异位字符的要求，让val加1
        if (s[i] in need && ++win[s[i]] === need[s[i]]) val++;
        //如果出滑动窗口的字符s[j]在need中，并且滑动窗口中该字符数量和need中的字符数量相同，
        //说明从窗口中移除该字符之后不满足异位字符的要求了，让窗口中这个字符的数量减1，并且val减1
        if (s[j] in need && win[s[j]]-- === need[s[j]]) val--;
        //如果need中滑动窗口中的异位字符种类一致 就说明从j+1开始就是异位字符串的一个起点
        if (val === len) res.push(j + 1);
    }
    return res;
};
console.log(findAnagrams('cbaebabacd', 'abc'))// [0,6]
console.log(findAnagrams('abab', 'ab'))// [0,1,2]
