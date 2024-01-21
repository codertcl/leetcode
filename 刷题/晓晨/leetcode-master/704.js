//方法1
var search = function (nums, target) {
  return search_interval(nums, target, 0, nums.length - 1)
};

function search_interval(nums, target, left, right) {
  if (left > right) {
      return -1
  }
  let mid = left + Math.floor((right - left) / 2);
  if (nums[mid] === target) {//判断目标值和中间元素的大小
      return mid
  } else if (nums[mid] < target) {//递归寻找目标元素
      return search_interval(nums, target, mid + 1, right)
  } else {
      return search_interval(nums, target, left, mid - 1)
  }
}



//方法2
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      //比较目标和中间元素的大小，然后不断缩小left和rihgt指针的范围
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
