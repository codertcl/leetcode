//方法1
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

//方法2
var majorityElement = function (nums) {
  let half = nums.length / 2;
  let obj = {};
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
    if (obj[num] > half) return num;
  }
};

//方法3
const majorityElement = (nums) => {
  let count = 1;
  let majority = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};

//方法4
var majorityElement = function (nums) {
  const getCount = (num, lo, hi) => {
    //统计lo到hi之间num的数量
    let count = 0;

    for (let i = lo; i <= hi; i++) {
      if (nums[i] === num) count++;
    }

    return count;
  };

  const getMode = (lo, hi) => {
    if (lo === hi) return nums[lo];

    //拆分成更小的区间
    let mid = Math.floor((lo + hi) / 2);
    let left = getMode(lo, mid);
    let right = getMode(mid + 1, hi);

    if (left === right) return left;

    let leftCount = getCount(left, lo, hi); //统计区间内left的个数
    let rightCount = getCount(right, lo, hi); //统计区间内right的个数

    return leftCount > rightCount ? left : right; //返回left和right中个数多的那个
  };

  return getMode(0, nums.length - 1);
};
