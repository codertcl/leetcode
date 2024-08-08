var subarraySum = function (nums, k) {
    const mp = new Map();
    //前缀和的值为key 次数为值
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        // 当前前缀和为pre
        // 如果某段前缀和为pre-k，即map中存在键为pre-k的键值对
        if (mp.has(pre - k)) {
            count += mp.get(pre - k);//mp.get(pre - k)为其出现次数
        }
        if (mp.has(pre)) { //存在该键 则将其键值对的值+1
            mp.set(pre, mp.get(pre) + 1);
        } else {//不存在 则新设置键值对
            mp.set(pre, 1);
        }
    }
    return count;
};
console.log(subarraySum([1, 1, 1], 2))//2
console.log(subarraySum([1, 2, 3], 3))//2
console.log(subarraySum([1, 2, 3], 4))//0
console.log(subarraySum([1, 2, 3], 1))//1
console.log(subarraySum([1], 0))//0
console.log(subarraySum([1, -1], 0))//1
