//方法1
const longestValidParentheses = (s) => {
  let maxLen = 0;
  const len = s.length;
  const dp = new Array(len).fill(0);
  for (let i = 1; i < len; i++) {
    if (s[i] == ")") {
      //以')'结尾的字符才有效
      if (s[i - 1] == "(") {
        //如果前一个位置时'(' 则能与当前字符形成有效括号
        if (i - 2 >= 0) {
          //如果前2个位置还有字符串
          dp[i] = dp[i - 2] + 2; //当前状态等于 当前匹配的2个字符 加上 前两个位置匹配最长字符长度
        } else {
          //如果前2个位置没有字符串
          dp[i] = 2; //当前状态等于 当前匹配的2个字符
        }
        //以i-1结尾的有效字符在向前看1个位置 如果是'(' 则能与当前字符形成有效括号
      } else if (s[i - dp[i - 1] - 1] == "(") {
        if (i - dp[i - 1] - 2 >= 0) {
          //以i-1结尾的有效字符在向前看2个位置 如果>=于0
          //当前状态=以i-1结尾的有效字符长度 + 当前匹配2个有效括号 + 以i - dp[i - 1] - 2结尾的有效字符长度
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
        } else {
          //以i-1结尾的有效字符在向前看2个位置 如果<于0
          //当前状态=以i-1结尾的有效字符长度 + 当前匹配2个有效括号
          dp[i] = dp[i - 1] + 2;
        }
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
};

//方法2
var longestValidParentheses = function (s) {
  let maxLen = 0;
  let stack = [];
  stack.push(-1); // 初始化一个参照物
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      // ( 入栈   )出栈
      stack.push(i);
    } else {
      // )的情况 出栈
      stack.pop();
      if (stack.length) {
        // 每次出栈 计算下当前有效连续长度
        // 如何计算连续长度 当前位置 - 栈顶下标
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      } else {
        stack.push(i); //栈为空时 放入右括号参照物 表示从这个下标开始 需要重新计算长度
      }
    }
  }
  return maxLen;
};

//方法3:

var longestValidParentheses = function (s) {
  let max = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    //从左往右
    if (s[i] == "(") {
      //遇见'(' left++
      left++;
    } else {
      right++; //遇见')' right++
    }
    if (left == right) {
      //左右数量相同
      max = Math.max(max, 2 * left); //更新最大长度
    } else if (right > left) {
      //right大于left 重置left right 重新计数
      left = right = 0;
    }
  }
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    //从右往左
    if (s[i] == "(") {
      left++;
    } else {
      right++;
    }
    if (left == right) {
      max = Math.max(max, right * 2);
    } else if (left > right) {
      left = right = 0;
    }
  }
  return max;
};
