var singleNumber = function (nums) {
    let x = 0
    //x即为多出来的两个元素的异或结果
    for (let i = 0; i < nums.length; i++) {
        x ^= nums[i]
    }
    //y即x的最左边的1(记为第l位)及后面的若干个0
    let y = x & (-x), type1 = 0, type2 = 0
    for (const num of nums) {
        //将两类元素分开,
        if (num & y) {
            type1 ^= num;
        } else {
            type2 ^= num;
        }
    }
    return [type1, type2]
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]))//[3,5]
console.log(singleNumber([-1, 0]))//[ -1,0]
