var twoSum = function (numbers, target) {
  let len = numbers.length,
    left = 0,
    right = len - 1,
    mid = 0;
  for (let i = 0; i < len; ++i) {
    //循环数组，从右边的元素二分查找另一个元素
    left = i + 1;
    while (left <= right) {
      mid = parseInt((right - left) / 2) + left;
      if (numbers[mid] == target - numbers[i]) {
        return [i + 1, mid + 1];
      } else if (numbers[mid] > target - numbers[i]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return [-1, -1];
};

var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1]; //左右指针
  while (left < right) {
    //
    if (numbers[left] + numbers[right] > target) {
      //和大了 right左移一位
      right--;
    } else if (numbers[left] + numbers[right] < target) {
      //和小了left右移一位
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
};
