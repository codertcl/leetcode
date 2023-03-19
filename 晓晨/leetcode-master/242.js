var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    //长度不想等 直接返回false
    return false;
  }
  const table = new Array(26).fill(0); //大小为26的数组
  for (let i = 0; i < s.length; ++i) {
    //循环字符串s，每个元素出现一次加1
    table[s.codePointAt(i) - "a".codePointAt(0)]++;
  }
  for (let i = 0; i < t.length; ++i) {
    //循环t元素
    table[t.codePointAt(i) - "a".codePointAt(0)]--; //每次出现的字符减1
    //如果t中出现一些字符对于s中的字符 则返回false
    if (table[t.codePointAt(i) - "a".codePointAt(0)] < 0) {
      return false;
    }
  }
  return true; //所有循环结束 说明两个字符串中每个字符的数量相同
};
