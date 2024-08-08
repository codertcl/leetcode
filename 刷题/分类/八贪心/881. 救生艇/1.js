var numRescueBoats = function (people, limit) {
    let ans = 0;
    people.sort((a, b) => a - b);
    let light = 0, heavy = people.length - 1;
    while (light <= heavy) {
        //如果当前最轻和最重的人能一起坐船，则light++，即这两个人一起
        if (people[light] + people[heavy] <= limit) {
            ++light;
        }
        --heavy;
        ++ans;
    }
    return ans;
};
console.log(numRescueBoats([1, 2], 3))//1
console.log(numRescueBoats([3, 2, 2, 1], 3))//3
console.log(numRescueBoats([3, 5, 3, 4], 5))//4
console.log(numRescueBoats([5, 1, 4, 2], 6))//2
