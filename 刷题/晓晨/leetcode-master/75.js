//方法1
var sortColors = function (nums) {
  let p0 = 0 //指向0
  let p1 = 0 //指向1

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {//如果当前i指向的元素等于1，则交换当前元素和p1指向的元素
          let temp = nums[p1]
          nums[p1] = nums[i]
          nums[i] = temp
          p1++
      } else if (nums[i] === 0) {//如果当前i指向的元素等于0，则交换当前元素和p0指向的元素
          let temp = nums[p0]
          nums[p0] = nums[i]
          nums[i] = temp
          //如果p0小于p1 则此时p0指向的元素是1，与i位置元素交换之后 这个交换过去的1位置就不对了 所以交换过去的1需要在和p1交换一下
          if (p0 < p1) {
              temp = nums[i];
              nums[i] = nums[p1];
              nums[p1] = temp;
          }
          //每次交换0之后都要移动p0和p1，如果p0===p1，则前面都是0，如果p0<p1,前面的代码已经交换了两次
          p0++
          p1++
      }
  }
};

//方法2
var sortColors = function (nums) {
  let p0 = 0; //指向0
  let p2 = nums.length - 1; //指向2
  for (let i = 0; i <= p2; i++) {
    //当循环到了p2 说明p2右边的元素都是正确的数，所以i<=p2
    //如果此时i指向元素2 i小于p2 则不断交换p2和i指向的元素 因为交换过来的数可能还是2，那这个2就处于不正确的位置了
    while (nums[i] === 2 && i < p2) {
      let temp = nums[i];
      nums[i] = nums[p2];
      nums[p2] = temp;
      p2--;
    }
    //如果此时i指向元素0 则交换p0和i指向的元素
    if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[p0];
      nums[p0] = temp;
      p0++;
    }
  }
};
