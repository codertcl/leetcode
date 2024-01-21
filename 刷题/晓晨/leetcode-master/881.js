var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let ans = 0,
    left = 0, //左指针初始化在0的位置
    right = people.length - 1; //右指针初始化在people.length - 1的位置
  while (left <= right) {
    //两指针向中间靠拢 遍历
    //当people[left] + people[right--]) <= limit 表示左右两边的人可以一起坐船 然后让left++ right--
    //如果两人坐不下，那只能让重的人先坐一条船 也就是让right--
    if (people[left] + people[right--] <= limit) {
      left++;
    }
    ans++;
  }
  return ans;
};
