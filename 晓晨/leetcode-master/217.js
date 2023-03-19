var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b); //排序
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      //判断相邻元素是否相同
      return true;
    }
  }
  return false;
};

var containsDuplicate = function (nums) {
  const set = new Set();
  for (const x of nums) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
  return false;
};
