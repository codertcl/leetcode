var corpFlightBookings = function (bookings, n) {
    let nums = Array(n).fill(0)
    for (const booking of bookings) {
        nums[booking[0] - 1] += booking[2]
        if (booking[1] < n) {
            nums[booking[1]] -= booking[2]
        }
    }
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1]
    }
    return nums
}

console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5));
console.log(corpFlightBookings([[1, 2, 10], [2, 2, 15]], 2));
