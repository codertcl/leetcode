var Trie = function() {
  this.children = {};
};

Trie.prototype.insert = function(word) {
  let nodes = this.children;
  for (const ch of word) {//循环word
      if (!nodes[ch]) {//当前字符不在子节点中 则创建一个子节点到children的响应位置
          nodes[ch] = {};
      }
      nodes = nodes[ch];//移动指针到下一个字符
  }
  nodes.isEnd = true;//字符是否结束
};

Trie.prototype.searchPrefix = function(prefix) {
  let nodes = this.children;
  for (const ch of prefix) {//循环前缀
      if (!nodes[ch]) {//当前字符不在子节点中 直接返回false
          return false;
      }
      nodes = nodes[ch];//移动指针到下一个字符
  }
  return nodes;//返回最后的节点
}

Trie.prototype.search = function(word) {
  const nodes = this.searchPrefix(word);
  //判断searchPrefix返回的节点是不是字符串的结尾的字符
  return nodes !== undefined && nodes.isEnd !== undefined;
};

Trie.prototype.startsWith = function(prefix) {
  return this.searchPrefix(prefix);
};

