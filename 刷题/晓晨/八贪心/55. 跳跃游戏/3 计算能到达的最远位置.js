var canJump = function (nums) {
    if (nums.length < 2) return true
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (max < i) return false; // 经过前面的元素，已经无法到达i，自然无法到达最后一个元素
        max = Math.max(max, i + nums[i]);
    }
    return true;
};
console.log(canJump([3, 2, 1, 0, 4]))// false
console.log(canJump([2, 3, 1, 1, 4]))// true
console.log(canJump([0]))// true
console.log(canJump([0, 2, 3]))// false
