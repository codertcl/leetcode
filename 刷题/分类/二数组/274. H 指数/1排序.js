/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b)
  let h = 0, i = citations.length - 1
  while (h < citations[i] && i >= 0) {
    h++
    i--
  }
  return h
};
console.log(hIndex([3, 7, 6, 1, 5])) // 3
console.log(hIndex([1, 3, 1])) // 1
console.log(hIndex([100])) // 1
console.log(hIndex([0])) // 0
console.log(hIndex([0, 0])) // 0