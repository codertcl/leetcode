var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";
  let ans = strs[0]; //ans初始值为字符串数组的第一个
  for (let i = 1; i < strs.length; i++) {
    //循环字符串数组
    let j = 0;
    for (; j < ans.length && j < strs[i].length; j++) {
      //循环字符，找到第一个不相同的位置
      if (ans[j] != strs[i][j]) break;
    }
    ans = ans.substr(0, j); //从0号位置到第一个不相同的位置 截取字符串
    if (ans === "") return ans;
  }
  return ans;
};
