//方法1
var firstUniqChar = function (s) {
  const counts = new Array(26).fill(0); //长度为26的数组，存放字符的出现次数

  for (const c of s) {
    //遍历s，统计每个字符出现次数
    counts[c.charCodeAt(0) - 97]++; //97是a的Unicode值
  }
  for (let i = 0; i < s.length; i++) {
    //再次遍历s
    if (counts[s[i].charCodeAt(0) - 97] == 1) {
      //找出第一个频次为1的字符的索引
      return i;
    }
  }
  return -1;
};

//方法2
var firstUniqChar = function(s) {
  const position = new Map();
  const q = [];
  const n = s.length;
  
  for (let [i, ch] of Array.from(s).entries()) {
    //循环字符串s，如果map中未出现当前字符，则将字符串和位置索引加入map和队列中
      if (!position.has(ch)) {
          position.set(ch, i);
          q.push([ch, i]);
      } else {
          position.set(ch, -1);//当出现重复字符时 map中的字符对应的value设置成-1
        //如果队头元素对应在map中的value是-1，说明是重复元素，不断出队，直到队头是不重复的元素
          while (q.length && position.get(q[0][0]) === -1) {
              q.shift();
          }
      }
  }
  return q.length ? q[0][1] : -1;//如果队列中存在元素，队头就是第一个不重复的字符
};

