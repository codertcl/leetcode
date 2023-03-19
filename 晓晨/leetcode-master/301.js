var removeInvalidParentheses = function (s) {
  let res = [];
  let queue = [];
  let visited = new Set(); //去重

  queue.push(s);
  while (true) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      s = queue.shift(); //出队
      if (isVaild(s)) {
        //如果是合法字符串
        res.push(s); //加入结果数组
      } else if (res.length == 0) {
        //不合法并且res.length == 0 则进入bfs下一层 尝试删除字符
        for (let i = 0; i < s.length; i++) {
          if (s[i] == "(" || s[i] === ")") {
            //是左右括号尝试删除字符，否则跳过
            let nexts = s.substring(0, i) + s.substring(i + 1);
            if (!visited.has(nexts)) {
              //判断新生成的字符串是否重复
              queue.push(nexts); //加入队列 进入下一层
              visited.add(nexts); //加入去重数组
            }
          }
        }
      }
    }
    if (res.length > 0) {
      //出现合法字符串的那一层，终止循环
      break;
    }
  }
  return res;
};

function isVaild(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      //左括号count+1
      count++;
    } else if (s[i] === ")") {
      //右括号count-1
      count--;
    }
    if (count < 0) {
      //小于0 说明右括号多
      return false;
    }
  }
  return count === 0;
}
