//方法1
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2); //数组转成set
  if (set1.size > set2.size) {
    //用size小的数组遍历
    [set1, set2] = [set2, set1];
  }
  const intersection = new Set();
  for (const num of set1) {
    //遍历set1
    if (set2.has(num)) {
      //元素如果不存在于set2中就加入intersection
      intersection.add(num);
    }
  }
  return [...intersection]; //转成数组
};

//方法2
var intersection = function (nums1, nums2) {
  nums1.sort((x, y) => x - y); //排序
  nums2.sort((x, y) => x - y);
  const length1 = nums1.length,
    length2 = nums2.length;
  let index1 = 0, //双指针
    index2 = 0;
  const intersection = [];
  while (index1 < length1 && index2 < length2) {
    //双指针遍历数组
    const num1 = nums1[index1],
      num2 = nums2[index2];
    if (num1 === num2) {
      //如果两个指针指向的元素相等 就时其中一个交集
      //防止重复加入
      if (num1 !== intersection[intersection.length - 1]) {
        intersection.push(num1);
      }
      index1++;
      index2++;
    } else if (num1 < num2) {
      index1++; //num1 < num2说明mums1需要向右移动
    } else {
      index2++; //num1 > num2说明mums1需要向左移动
    }
  }
  return intersection;
};
