var containsNearbyAlmostDuplicate = function (nums, k, t) {
    const n = nums.length;
    const mp = new Map();
    for (let i = 0; i < n; ++i) {
        const x = nums[i];
        //查找该元素要分配的桶的编号
        const id = getID(x, t + 1);
        if (mp.has(id)) {
            return true;
        }
        if (mp.has(id - 1) && Math.abs(x - mp.get(id - 1)) <= t) {
            return true;
        }
        if (mp.has(id + 1) && Math.abs(x - mp.get(id + 1)) <= t) {
            return true;
        }
        mp.set(id, x);
        //i-k下标对应元素已经不满足条件 所以删除掉其所在的桶
        if (i >= k) {
            mp.delete(getID(nums[i - k], t + 1));
        }
    }
    return false;
};
// t=3
// 如果是x/w, -3到-1没有落在一个桶内，不满足条件
// getID(-1,3) =  0
// getID(-2,3) =  0
// getID(-3,3) = -1
//
// 如果x小于0，id=(x+1)/w,   -3到1落在一个桶内，不满足条件
// getID(-1,3) = 0
// getID(-2,3) = 0
// getID(-3,3) = 0
// getID(1,3) =  0
// getID(0,3) =  0
//
// 如果x小于0，id=(x+1)/w-1,   满足条件 -3到3不在一个桶内就满足条件
// getID(-1,3) = -1
// getID(-2,3) = -1
// getID(-3,3) = -1
// getID(1,3)  = 0
// getID(0,3)  = 0
//  x小于0时 x+1是为了让-1到-t在一个桶内
//  结果-1就是为了避免-t到t-1落在一个桶内

const getID = (x, w) => {
    return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
}
debugger
console.log(containsNearbyAlmostDuplicate([1, -2, -3, 1], 3, 0))//
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))//
console.log(containsNearbyAlmostDuplicate([-1, 6, 1, 6], 1, 1))//

