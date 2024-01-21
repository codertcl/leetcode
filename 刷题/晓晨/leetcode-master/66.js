//例子：19， 99
var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10; //求余10，覆盖当前位置
    if (digits[i] != 0)
      //没有进位就直接返回这个数
      return digits;
  }
  digits = [...Array(len + 1)].map((_) => 0); //循环没有return掉 处理一直进位到最大位置
  digits[0] = 1;
  return digits;
};
