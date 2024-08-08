//时间复杂度O(nlogn) 获取众数是lgn,获取次数时O(n) 空间复杂度O(lgn)递归深度
var majorityElement = function (nums) {
    const getCount = (num, low, high) => {//统计low到high之间num的数量
        let count = 0;

        for (let i = low; i <= high; i++) {
            if (nums[i] === num) count++;
        }
        return count;
    };

    const getMode = (low, high) => {
        //区间长度为1 则直接返回该元素
        if (low === high) return nums[low];

        //拆分成更小的区间
        let mid = Math.floor((low + high) / 2);
        //获取左右两边的众数
        let left = getMode(low, mid);
        let right = getMode(mid + 1, high);

        if (left === right) return left;
        //左右两边出现众数次数不一致,则分别计算区间内出现的次数
        let leftCount = getCount(left, low, high);//统计区间内left的个数
        let rightCount = getCount(right, low, high);//统计区间内right的个数

        return leftCount > rightCount ? left : right;//返回left和right中个数多的那个
    };
    return getMode(0, nums.length - 1);
};
console.log(majorityElement([3, 2, 3]))//3
console.log(majorityElement([3]))//3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))//2
