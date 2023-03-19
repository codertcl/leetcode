const intersect = (nums1, nums2) => {
  const map = {};
  const res = [];
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  for (const num1 of nums1) {
    //nums1中各个元素的频次
    if (map[num1]) {
      map[num1]++;
    } else {
      map[num1] = 1;
    }
  }
  for (const num2 of nums2) {
    //遍历nums2
    const val = map[num2];
    if (val > 0) {
      //在nums1中
      res.push(num2); //加入res数组
      map[num2]--; //匹配掉一个，就减一个
    }
  }
  return res;
};

const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b); //排序两个数组
  const res = [];
  let p1 = 0; //指向nums1中的元素
  let p2 = 0; //指向nums2中的元素
  while (p1 < nums1.length && p2 < nums2.length) {
    //不越界条件
    if (nums1[p1] > nums2[p2]) {
      //p1指向的元素大，移动p2
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      //p2指向的元素大，移动p1
      p1++;
    } else {
      //遇到相同则加入入res，移动两指针
      res.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return res;
};
