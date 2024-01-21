/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    //长度为n+1
    this.preSum = Array(nums.length + 1).fill(0)
    for (let i = 1; i < this.preSum.length; i++) {
        //i即为前i个元素的总和 nums[i-1]即为第i个元素(此处的i大于等于1)
        this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
    }
};


/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    //注意preSum数组长度为n+1 下标为前i个元素之和
    //由于0<=i<=j<nums.length-1
    // 所以this.preSum[right + 1]为前right+1个元素之和(最后一个元素为nums[right)
    // this.preSum[left]中求和的最后一个元素为left下标元素的前一个(不包含left下标对应元素)
    return this.preSum[right + 1] - this.preSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var obj = new NumArray([1, 2, 3, 4])
var param_1 = obj.sumRange(1, 3)
console.log(param_1)
console.log(obj.sumRange(0, 1))
