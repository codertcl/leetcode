/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0, l = 0, r = height.length - 1;
    while (l < r) {
        let res = (r - l) * Math.min(height[l], height[r])
        if (res > max) {
            max = res
        }
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return max
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1, 2]))
