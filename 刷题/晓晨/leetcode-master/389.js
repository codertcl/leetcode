//方法1
var findTheDifference = function (s, t) {
  const cnt = new Array(26).fill(0);
  for (const ch of s) {
    //循环字符串s 统计每个字符的个数
    cnt[ch.charCodeAt() - "a".charCodeAt()]++;
  }
  for (const ch of t) {
    //循环字符串t 每出现一次s中的字符 就让相应字符的数量减少1
    cnt[ch.charCodeAt() - "a".charCodeAt()]--;
    if (cnt[ch.charCodeAt() - "a".charCodeAt()] < 0) {
      //如果字符减少到了小于0 则这个字符就是答案
      return ch;
    }
  }
  return " ";
};

//方法2
var findTheDifference = function (s, t) {
  let as = 0,
    at = 0;
  for (let i = 0; i < s.length; i++) {
    //统计字符串s中字符ASCII的总和
    as += s[i].charCodeAt();
  }
  for (let i = 0; i < t.length; i++) {
    //统计字符串t中字符ASCII的总和
    at += t[i].charCodeAt();
  }
  return String.fromCharCode(at - as); //两个和的差 就是不同的字符
};

//方法3
var findTheDifference = function (s, t) {
  let ret = 0; //循环s和t 不断异或 相同元素异或等于0 所以唯一不同的字符最后会留下来
  for (const ch of s) {
    ret ^= ch.charCodeAt();
  }
  for (const ch of t) {
    ret ^= ch.charCodeAt();
  }
  return String.fromCharCode(ret);
};
