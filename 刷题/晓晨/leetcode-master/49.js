//方法1
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    let array = Array.from(str); //字符转成数组
    array.sort(); //排序
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : new Array(); //从map中取到相应的数组
    list.push(str); //加入数组
    map.set(key, list); //重新设置该字符的数组
  }
  return Array.from(map.values()); //map中的value转成数组
};

//方法2
var groupAnagrams = function (strs) {
  const map = {};
  for (let s of strs) {
    //循环字符串数组
    const count = new Array(26).fill(0); //字符都是小写，初始化大小为26的数组
    for (let c of s) {
      //对字符串的每个字符统计频次
      count[c.charCodeAt() - "a".charCodeAt()]++;
    }
    map[count] ? map[count].push(s) : (map[count] = [s]); //加入map
  }
  return Object.values(map);
};
