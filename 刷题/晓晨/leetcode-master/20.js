var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    //如果字符串能组成有效的括号，则长度一定是偶数
    return false;
  }
  const pairs = new Map([
    //用栈存储括号对
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stk = [];
  for (let ch of s) {
    //循环字符串
    if (pairs.has(ch)) {
      //遇到右括号则判断右括号是否能和栈顶元素匹配
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch); //如果遇到左括号入栈
    }
  }
  return !stk.length; //循环结束的时候还要判断栈是否为空
};
