var grayCode = function (n) {
  let ans = [0];
  let pre = 1;
  for (let i = 0; i < n; i++) {
    for (let j = ans.length - 1; j >= 0; j--) {
      ans.push(pre + ans[j]);
    }
    pre <<= 1;
  }
  return ans;
};
