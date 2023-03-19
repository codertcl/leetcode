/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0, j = numbers.length - 1
    while (i < j) {
        let tmp = target - numbers[i]
        //数组已经排序好，所以可以判断剩下的值和j元素值的大小关系
        if (tmp < numbers[j]) {
            j--
        } else if (tmp === numbers[j]) {
            return [++i, ++j]
        }else {
            i++
        }
    }
};

console.log(twoSum([1,2,3],3))
console.log(twoSum([1,2,3],4))
console.log(twoSum([0,2,3],2))
