// 维护一个大小为 kk 的滑动窗口，每次遍历到元素 xx 时
// 滑动窗口中包含元素 xx 前面的最多 kk 个元素
// 我们检查窗口中是否存在元素落在区间 [x - t, x + t][x−t,x+t] 中即可。
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    const map = new Map();
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        //维护一个大小为k的map 当前i超过k,则nums[i - k - 1]已经不满足下标距离不超过
        if (i > k) {//如果超过k则删除前端的一个
            map.delete(nums[i - k - 1]);
        }
        for (let [key, val] of map) {//for of 遍历key(nums[x]),val(x)
            if (Math.abs(nums[i] - key) <= t) {//判断两个条件是否符合
                return true
            }
        }
        map.set(nums[i], i);//遍历一个nums内容，给map增加一对,nums[i],i
    }
    return false
};
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))//
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))//
console.log(containsNearbyAlmostDuplicate([1, 6, 1, 6], 1, 1))//
