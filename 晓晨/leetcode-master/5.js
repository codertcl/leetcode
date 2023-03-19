//方法1
var longestPalindrome = function (s) {
  let n = s.length;
  let res = "";
  let dp = Array.from(new Array(n), () => new Array(n).fill(0)); //初始化数组
  for (let i = n - 1; i >= 0; i--) {
    //循环字符串
    for (let j = i; j < n; j++) {
      //dp[i][j]表示子串i～j是否是回文子串
      //回文子串必须满足s[i]，s[j]相等。并且向外扩展一个字符也想等，即dp[i+1][j-1]也是回文子串
      //j - i < 2表示子串小于等于1也是回文串
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        //当前回文子串比之前的大，更新最大长度
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

//方法2
var longestPalindrome = function (s) {
  if (s.length <= 0) {
    //边界条件
    return s;
  }

  let start = 0; //最长回文子串开始的索引
  let maxLength = 1; //初始化最大回文子串长度
  function h(left, right) {
    //当s[left]，和 s[right]想等时，不断向外扩展回文字符串的长度
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1; //更新最大回文子串的长度
        start = left; //更新start的位置
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    h(i - 1, i + 1); //回文子串是奇数
    h(i, i + 1); //回文子串是偶数
  }

  return s.substring(start, start + maxLength);
};
