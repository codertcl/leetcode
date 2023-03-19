var subsets = function (nums) {
  let result = []; //存放结果
  let path = []; //存放一个分支的结果
  function backtracking(startIndex) {
    //startIndex字符递归开始的位置
    result.push(path.slice()); //path.slice()断开和path的引用关系
    for (let i = startIndex; i < nums.length; i++) {
      //从startIndex开始递归
      path.push(nums[i]); //当前字符推入path
      backtracking(i + 1); //startIndex向后移动一个位置 继续递归
      path.pop(); //回溯状态
    }
  }
  backtracking(0);
  return result;
};
