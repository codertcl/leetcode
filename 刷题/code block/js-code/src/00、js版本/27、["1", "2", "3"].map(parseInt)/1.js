const nums = ["1", "2", "3"];
const res = nums.map((item, index) => parseInt(item, index))
// parseInt("1", 0) 将1当成10进制，输出1
// parseInt("2", 1) 将2当成1进制，输出NaN
// parseInt("3", 2) 将3当成2进制，输出NaN
