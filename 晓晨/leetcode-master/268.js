var missingNumber = function (nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    //相同的数异或为0
    missing = missing ^ nums[i] ^ i;
  }
  return missing;
};
