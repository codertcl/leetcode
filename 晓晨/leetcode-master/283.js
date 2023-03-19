//方法1
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //遇到非0元素，让nums[j] = nums[i]，然后j++
      nums[j] = nums[i];
      j++;
    }
  }
  for (let i = j; i < nums.length; i++) {
    //剩下的元素全是0
    nums[i] = 0;
  }
  return nums;
};

//方法2
var moveZeroes = function (nums) {
  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      //遇上非0元素，交换left和right对应的元素
      swap(nums, left, right);
      left++; //交换之后left++
    }
    right++;
  }
};
function swap(nums, l, r) {
  let temp = nums[r];
  nums[r] = nums[l];
  nums[l] = temp;
}
