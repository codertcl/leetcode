// 差分数组工具类
class Difference {
    constructor(nums) {
        // 差分数组
        this.diff = Array(nums.length)
        this.diff[0] = nums[0]
        for (let i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1]
        }
    }

    increment(i, j, val) {
        //由于res[i] = res[i - 1] + this.diff[i] 所以更改diff相当于更新后面的元素
        //当j+1不是最后一个元素时，就将this.diff[j + 1] -= val，消除对j下标元素后面的修改
        this.diff[i] += val
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] -= val
        }
    }

    gerRes() {
        let res = Array(this.diff.length)
        res[0] = this.diff[0]
        for (let i = 1; i < this.diff.length; i++) {
            res[i] = res[i - 1] + this.diff[i]
        }
        return res
    }
}

var corpFlightBookings = function (bookings, n) {
    let nums = Array(n).fill(0)
    let df = new Difference(nums)
    for (const update of bookings) {
        // update中下标i j从1开始，所以要-1
        df.increment(update[0] - 1, update[1] - 1, update[2])
    }
    return df.gerRes();
}

console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5));
console.log(corpFlightBookings([[1, 2, 10], [2, 2, 15]], 2));
