const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
var sortArrayByParityII = function (nums) {
  const n = nums.length;
  let j = 1;
  for (let i = 0; i < n; i += 2) {
    if (nums[i] & 1) {
      //循环偶数位置 如果遇到了奇数
      while (nums[j] & 1) {
        //循环奇数位置 如果遇到了第一个偶数
        j += 2;
      }
      swap(nums, i, j); //交位置换
    }
  }
  return nums;
};
