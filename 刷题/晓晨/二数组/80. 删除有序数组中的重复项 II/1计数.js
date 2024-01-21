/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; ) {
    const count = map.get(nums[i])
    if (count) {
      if (count === 2) {
        // 此处不让i自增，避免因为删除元素后，跳过了下个元素的判断，造成元素未被删除
        nums.splice(i, 1)
      } else {
        map.set(nums[i], 2)
        i++
      }
    } else {
      map.set(nums[i], 1)
      i++
    }
  }
  console.log(nums)
};
removeDuplicates([1, 1, 1, 2, 2, 3])
removeDuplicates([0,0,1,1,1,1,2,3,3])