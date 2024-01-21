var letterCombinations = (digits) => {
  if (digits.length == 0) return [];
  const res = [];
  const map = {
    //建立电话号码和字母的映射关系
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (curStr, i) => {
    //curStr是递归每一层的字符串，i是扫描的指针
    if (i > digits.length - 1) {
      //边界条件，递归的出口
      res.push(curStr); //其中一个分支的解推入res
      return; //结束递归分支，进入另一个分支
    }
    const letters = map[digits[i]]; //取出数字对应的字母
    for (const l of letters) {
      //进入不同字母的分支
      dfs(curStr + l, i + 1); //参数传入新的字符串，i右移，继续递归
    }
  };
  dfs("", 0); // 递归入口，传入空字符串，i初始为0的位置
  return res;
};

var letterCombinations = (digits) => {
  if (digits.length == 0) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const queue = [];
  queue.push("");
  for (let i = 0; i < digits.length; i++) {
    //循环数字的每个字符
    const levelSize = queue.length; //当前层的节点个数
    for (let j = 0; j < levelSize; j++) {
      const curStr = queue.shift(); //当前层的字符串
      const letters = map[digits[i]]; //获取数字对应的字母字符
      for (const l of letters) {
        queue.push(curStr + l); //新生成的字符串入列
      }
    }
  }
  return queue; //最后一层生成的字符串就是解
};
