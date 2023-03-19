var reverseWords = function (s) {
  return s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");
};

var reverseWords = function (s) {
  let left = 0;
  let right = s.length - 1;
  let queue = [];
  let word = "";
  //去掉左右的空格
  while (s.charAt(left) === " ") left++;
  while (s.charAt(right) === " ") right--;
  while (left <= right) {
    let char = s.charAt(left);
    if (char === " " && word) {
      queue.unshift(word); //字符串加入队列
      word = ""; //重置字符串
    } else if (char !== " ") {
      //拼接单个字符串
      word += char;
    }
    left++;
  }
  queue.unshift(word); //最后一个字符串也要加入队列
  return queue.join(" "); //转回字符串
};
