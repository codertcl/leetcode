var maxArea = function (height) {
    let max = 0
    let len = height.length
    for (let i = 0; i < len; i++)
        for (let j = len - 1; j > i; j--) {
            //固定以左边的高度作为蓄水池的高
            if (height[i] * (j - i) <= max) break
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
        }
    return max
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1, 2]))
