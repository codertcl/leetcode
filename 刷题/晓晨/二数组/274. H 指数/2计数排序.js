var hIndex = function (citations) {
  const n = citations.length;
  const cnt = new Array(n + 1).fill(0);
  for (const c of citations) {
    cnt[Math.min(c, n)]++; // 引用次数 > n，等价于引用次数为 n
  }
  let s = 0;
  debugger
  for (let i = n; ; i--) { // i=0 的时候，s>=i 一定成立
    s += cnt[i];
    if (s >= i) { // 说明有至少 i 篇论文的引用次数至少为 i
      return i;
    }
  }
};
console.log(hIndex([3, 7, 6, 1, 5])) // 3
console.log(hIndex([1, 3, 1])) // 1
console.log(hIndex([100])) // 1
console.log(hIndex([0])) // 0
console.log(hIndex([0, 0])) // 0