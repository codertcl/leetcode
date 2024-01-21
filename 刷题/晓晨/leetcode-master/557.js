const reverseWords = (s) => {
  const arr = s.split(" ");
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].split("").reverse().join(""));
  }
  return res.join(" ");
};

var reverseWords = function (s) {
  let arr = s.split("");

  let l = 0,
    r = l;
  while (l < arr.length) {
    //找到结尾的空格
    while (arr[r] && arr[r] !== " ") {
      r++;
    }

    //反转单词
    for (let i = l, j = r - 1; i < j; i++, j--) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    //跳到下一个单词
    l = r + 1;
    r = l;
  }

  return arr.join("");
};
