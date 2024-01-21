//方法1
var removeElement = function (nums, val) {
  const n = nums.length;
  let left = 0; //left指针初始在0号位置
  for (let right = 0; right < n; right++) {
    //用right指针循环数组
    if (nums[right] !== val) {
      //当前元素不为val，则直接覆盖left位置的元素
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};

//优化 题意是可以不考虑数组元素的顺序
//当数组是[1,2,3,4,5]，需要删除的元素是1的时候，按照方法1，则需要不断将1之后的元素都向前移动一位
//当数组长度很大的时候比较消耗性能
//我们我们直接让right初始化在nums.length的位置 left初始化在0号位置
//当left<right的时候 循环数组
//当nums[left] === val的时候，用right-1的位置覆盖left的位置指向的元素，然后向左移动right
//当nums[left] !== val的时候，说明当前元素不需要覆盖，直接让left++
var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};
