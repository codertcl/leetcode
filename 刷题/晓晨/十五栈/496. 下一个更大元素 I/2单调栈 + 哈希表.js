var nextGreaterElement = function(nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; --i) {
    const num = nums2[i];
    // 从栈里找比比当前元素小的，全部删除
    while (stack.length && num > stack[stack.length - 1]) {
      stack.pop();
    }
    // 找到比其大的就保留,即为右边第一个比numa=s1对应大的, 否则对应设置为-1
    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }
  const res = []
  for (let i = 0; i < nums1.length; i++) {
    res.push(map.get(nums1[i]))
  }
  return res
  // return new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]));
};

console.log(nextGreaterElement([4,1,2],  [1,3,4,2]))
console.log(nextGreaterElement([2,4],   [1,2,3,4]))