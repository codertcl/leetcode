//方法1
const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  const queue = [];
  queue.push([beginWord, 1]); //开始单词和层级加入队列

  while (queue.length) {
    const [word, level] = queue.shift(); //出队 进行bfs
    if (word == endWord) {
      //和endword相等返回层级
      return level;
    }
    for (let i = 0; i < word.length; i++) {
      //循环单词列表
      for (let c = 97; c <= 122; c++) {
        //循环26个小写字符
        //得到新的单词
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          //检查wordset包不包括新生成的单词
          queue.push([newWord, level + 1]); //新单词加入队列
          wordSet.delete(newWord); //避重复入列
        }
      }
    }
  }
  return 0; // bfs结束，始终没有遇到终点
};

//方法2
var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  //从beginWord到endWord
  let begSet = [];
  //从endWord到beginWord
  let endSet = [];
  begSet.push(beginWord);
  endSet.push(endWord);

  let n = 1; //层级
  while (begSet.length > 0) {
    //开始遍历单词
    const nextBegins = []; //bfs下一层级的单词数组
    //步数少数对换一下，让走的慢的在走几步
    if (begSet.length > endSet.length) {
      let q = begSet;
      begSet = endSet;
      endSet = q;
    }
    //循环begSet
    for (let k = 0; k < begSet.length; k++) {
      let m = begSet[k];
      for (let i = 0; i < m.length; i++) {
        for (let c = 97; c <= 122; c++) {
          //生成新词
          let newm = m.slice(0, i) + String.fromCharCode(c) + m.slice(i + 1);
          if (endSet.includes(newm)) {
            //相遇
            return n + 1;
          }
          if (wordSet.has(newm)) {
            nextBegins.push(newm); //下一层bfs的单词数组
            wordSet.delete(newm); //防止重复
          }
        }
      }
    }
    begSet = nextBegins;
    n++; //层级+1
  }
  return 0;
};
