//方法1
var countBits = function (n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    bits[i] = countOnes(i);
  }
  return bits;
};

const countOnes = (x) => {
  let ones = 0;
  while (x > 0) {
    x &= x - 1;
    ones++;
  }
  return ones;
};

//方法2
var countBits = function (n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i & (i - 1)] + 1;
  }
  return bits;
};
