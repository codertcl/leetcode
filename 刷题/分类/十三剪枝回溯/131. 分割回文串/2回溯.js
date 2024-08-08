var partition = function (s) {
    const res = [], path = [];

    const isPalindrome = (s, l, r) => {
        for (let i = l, j = r; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false
            }
        }
        return true;
    }
    const backTracking = (startIndex) => {
        // 切割线切到了字符串最后面，说明找到了一种切割方法
        if (startIndex >= s.length) {
            res.push([...path]);
        } else {
            for (let i = startIndex; i < s.length; i++) {
                // 当前串不是回文串，则本次循环终止
                if (!isPalindrome(s, startIndex, i)) continue
                //  当前串不是回文串，则一定有满足要求的结果，毕竟剩下的部分还可以拆分成单个字符
                path.push(s.slice(startIndex, i + 1));
                backTracking(i + 1);
                path.pop();
            }
        }
    }
    backTracking(0);
    return res;
};
console.log(partition('aab'))//[["a","a","b"],["aa","b"]]
console.log(partition('a')) // [['a']]
console.log(partition('')) // []
console.log(partition("abbab"))//[["a","b","b","a","b"],["a","b","bab"],["a","bb","a","b"],["abba","b"]]