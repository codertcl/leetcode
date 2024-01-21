//方法1
const lengthOfLIS = (nums) => {
  let dp = Array(nums.length).fill(1);
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        //当nums[i] > nums[j]，则构成一个上升对
        dp[i] = Math.max(dp[i], dp[j] + 1); //更新dp[i]
      }
    }
    result = Math.max(result, dp[i]); //更新结果
  }

  return result;
};

//方法2
var lengthOfLIS = function (nums) {
  let n = nums.length;
  if (n <= 1) {
    return n;
  }
  let tail = [nums[0]]; //存放最长上升子序列数组
  for (let i = 0; i < n; i++) {
    if (nums[i] > tail[tail.length - 1]) {
      //当nums中的元素比tail中的最后一个大时 可以放心push进tail
      tail.push(nums[i]);
    } else {
      //否则进行二分查找
      let left = 0;
      let right = tail.length - 1;
      while (left < right) {
        let mid = (left + right) >> 1;
        if (tail[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tail[left] = nums[i]; //将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
    }
  }
  return tail.length;
};
