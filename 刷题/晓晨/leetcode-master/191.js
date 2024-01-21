//方法1
var hammingWeight = function (n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      //让1不断左移 判断该位是否为1
      ret++;
    }
  }
  return ret;
};

//方法2
var hammingWeight = function (n) {
  let ret = 0;
  while (n) {
    n &= n - 1; //不断消掉最右边的1
    ret++;
  }
  return ret;
};
