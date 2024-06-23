/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const res = Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length - 1; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))