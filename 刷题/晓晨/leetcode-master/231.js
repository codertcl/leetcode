//方法1
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

//方法2
var isPowerOfTwo = function(n) {
  const MAX = 1 << 30;
  return n > 0 && MAX % n === 0;
};