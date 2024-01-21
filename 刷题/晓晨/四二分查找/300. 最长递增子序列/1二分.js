var lengthOfLIS = function (nums) {
    // 每堆的堆顶
    const top = [];
    // 牌堆数初始化为0
    let piles = 0;
    for (let i = 0; i < nums.length; i++) {
        // 要处理的扑克牌
        let poker = nums[i];
        // 左堆和最右堆进行二分搜索，因为堆顶是有序排的，最终找到该牌要插入的堆
        let left = 0,
            right = piles;//注意right初始值为0
        //搜索区间是左闭右开
        while (left < right) {
            let mid = left + ((right - left) >> 1);
            if (top[mid] > poker) {
                right = mid;
            } else if (top[mid] < poker) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        //  没找到合适的牌堆，新建一堆
        if (left === piles) piles++;
        // console.log(top,left,right)
        // 把这张牌放到堆顶
        top[left] = poker;
    }
    return piles;
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))//4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))//4
console.log(lengthOfLIS([4, 4, 4]))//1
