var nextPermutation = function (nums) {
    // let set = new Set()
    // set.add(nums[0] * 100 + nums[1] * 10 + nums[2])
    // set.add(nums[0] * 100 + nums[1] + nums[2] * 10)
    // set.add(nums[0] * 10 + nums[1] * 100 + nums[2])
    // set.add(nums[0] * 10 + nums[1] + nums[2] * 100)
    // set.add(nums[0] + nums[1] * 100 + nums[2] * 10)
    // set.add(nums[0] + nums[1] * 10 + nums[2] * 100)
    // let arr = Array.from(set).sort((a, b) => (a - b))
    // let index = arr.indexOf(parseInt(nums.join(''), 10)), tmp = null
    // if (index === arr.length - 1) {
    //     tmp = arr[0].toString().split('').map(item => parseInt(item, 10))
    // } else {
    //     tmp = arr[index + 1].toString().split('').map(item => parseInt(item, 10))
    // }
    //
    // for (let i = 0; i < nums.length; i++) {
    //     nums[i] = tmp[i]
    // }
    // console.log(nums)
    // console.log(Array.isArray(nums))

    let i = nums.length - 2;
    // 从右往左遍历拿到第一个左边小于右边的 i,此时 i 右边的数组是从右往左递增的
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    if (i >= 0) {
        let j = nums.length - 1;
        // 从右往左遍历拿到第一个大于nums[i]的数,因为之前nums[i]是第一个小于他右边的数，所以他的右边一定有大于他的数
        while (j >= 0 && nums[j] <= nums[i]) {
            j--
        }
        // 交换两个数
        [nums[j], nums[i]] = [nums[i], nums[j]]
    }
    // 对 i 右边的数进行交换
    // 因为 i 右边的数原来是从右往左递增的，把一个较小的值交换过来之后，仍然维持单调递增特性
    // 此时头尾交换并向中间逼近就能获得 i 右边序列的最小值
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++
        r--
    }
};
nextPermutation([1, 2, 3])
debugger
// nextPermutation([3, 2, 3])
nextPermutation([3, 2, 1])
