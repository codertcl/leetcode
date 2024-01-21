function isPalindrome(str, l, r) {
  while (l < r) {
    //对撞指针不断判断两边的数字是否相等
    if (str[l] != str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

var validPalindrome = function (str) {
  let l = 0,
    r = str.length - 1; //头尾指针
  while (l < r) {
    if (str[l] != str[r]) {
      //左右指针不一样 还有一次机会，左指针向前一步或者右指针向后一步继续验证
      return isPalindrome(str, l + 1, r) || isPalindrome(str, l, r - 1);
    }
    l++;
    r--;
  }
  return true;
};
