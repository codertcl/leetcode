var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        //注意一个元素不能用两次 所以left必须是i+1开始
        let left = i + 1, right = numbers.length - 1
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2)
            if (numbers[mid] < target - numbers[i]) {
                left = mid + 1
            } else if (numbers[mid] > target - numbers[i]) {
                right = mid - 1
            } else {
                return [++i, ++mid]
            }
        }
    }
    return [-1, -1]
};

console.log(twoSum([1, 2, 3], 3))//[1,2]
console.log(twoSum([1, 2, 3], 4))//[1,3]
console.log(twoSum([0, 2, 3], 2))//[1,2]
