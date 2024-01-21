var reverseString = function (s) {
  const n = s.length;
  //双指针不断交换left和right位置的元素
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};
