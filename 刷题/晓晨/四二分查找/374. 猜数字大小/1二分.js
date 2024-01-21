/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return                -1 if num is lower than the guess number
 *                         1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1, right = n
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        // if (guess(mid) === 0) {
        //     return mid
        // } else if (guess(mid) > 0) {
        //     left = mid + 1 //区间[mid+1, right]
        // } else {
        //     right = mid - 1//[left, mid-1]
        // }
        if (guess(mid) <= 0) {
            right = mid; //更新查找区间为[left, mid]
        } else {
            left = mid + 1; //更新查找区间为[mid+1, right]
        }
    }
    return left
};
